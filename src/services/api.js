// simple "API" layer using mockData + localStorage persistence
import mockData from "../data/mockData.json";

const STORAGE_KEY = "care_connect_data_v1";

function normalizeData(raw) {
  // هنحوّل بيانات doctors و patients بحيث تتوافق مع التوقعات في باقي الكود
  const patients = (raw.patients || []).map((p, idx) => ({
    id: p.id ?? idx + 1,
    name: p.name,
    avatarUrl: p.avatarUrl || "",
    phone: p.phone || "",
    email: p.email || "",
    password: p.password || "password123", // نضيف كلمة مرور افتراضية
    dob: p.registered || "1990-01-01",
    medicalHistoryId: p.medicalHistoryId ?? (p.id ?? idx + 1)
  }));

  const doctors = (raw.doctors || []).map((d, idx) => ({
    id: d.id ?? idx + 1,
    name: d.name,
    specialty: d.specialty,
    email: d.email,
    phone: d.phone,
    avatarUrl: d.avatarUrl,
    // **هنا** نحافظ على availableSlots من mockData لو موجودة
    availableSlots: d.availableSlots || []
  }));

  // إذا الملف الأصلي يحتوي appointments، استخدمها، وإلا حاول بناء قائمة افتراضية من recentActivities
  const appointments = (raw.appointments && raw.appointments.length)
    ? raw.appointments.map((a) => ({
        id: a.id,
        patientId: a.patientId,
        doctorId: a.doctorId,
        date: a.date,
        status: a.status || "upcoming"
      }))
    : (raw.platformStats?.recentActivities
        ?.filter((a) => a.type === "appointment")
        .map((a, idx) => ({
          id: idx + 1,
          patientId: 1,
          doctorId: 1,
          date: "2025-11-05T14:00",
          status: "completed"
        })) || []);

  const medicalHistories = patients.map((p) => ({
    id: p.medicalHistoryId,
    patientId: p.id,
    conditions: "",
    medications: "",
    allergies: "",
    notes: ""
  }));

  return { patients, doctors, appointments, medicalHistories };
}


function loadStore() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    // أول مرة: استخدم mockData.json لكن بعد تحويله
    const normalized = normalizeData(mockData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  }
  return JSON.parse(raw);
}


function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

// Utility to generate ids
function nextId(arr) {
  if (!arr || arr.length === 0) return 1;
  return Math.max(...arr.map((i) => i.id)) + 1;
}

export const api = {
  // Authentication & Patients
  getPatientByEmail(email) {
    const store = loadStore();
    return Promise.resolve(store.patients.find((p) => p.email === email) || null);
  },

  registerPatient(patientObj) {
    const store = loadStore();
    const exists = store.patients.find((p) => p.email === patientObj.email);
    if (exists) return Promise.reject(new Error("Email already registered"));
    const id = nextId(store.patients);
    const mhId = nextId(store.medicalHistories);
    const newPatient = { id, ...patientObj, medicalHistoryId: mhId };
    store.patients.push(newPatient);
    // create empty medical history
    store.medicalHistories.push({
      id: mhId,
      patientId: id,
      conditions: "",
      medications: "",
      allergies: "",
      notes: ""
    });
    saveStore(store);
    return Promise.resolve(newPatient);
  },

  login(email,password) {
    const store = loadStore();
    const p = store.patients.find((x) => x.email === email && x.password === password);
    if (!p) return Promise.reject(new Error("Email or Password are wrong"));
    return Promise.resolve(p);
  },

  updatePatient(id, updates) {
    const store = loadStore();
    const idx = store.patients.findIndex((p) => p.id === id);
    if (idx === -1) return Promise.reject(new Error("Patient not found"));
    store.patients[idx] = { ...store.patients[idx], ...updates };
    saveStore(store);
    return Promise.resolve(store.patients[idx]);
  },

  changePassword(id, oldPass, newPass) {
    const store = loadStore();
    const p = store.patients.find((x) => x.id === id);
    if (!p) return Promise.reject(new Error("Patient not found"));
    if (p.password !== oldPass) return Promise.reject(new Error("Old password incorrect"));
    p.password = newPass;
    saveStore(store);
    return Promise.resolve(true);
  },

  // Doctors & slots
  getDoctors() {
    const store = loadStore();
    return Promise.resolve(store.doctors);
  },

  getAvailableSlots(doctorId) {
    const store = loadStore();
    const d = store.doctors.find((x) => x.id === doctorId);
    return Promise.resolve(d ? d.availableSlots : []);
  },

  // Appointments
  getAppointmentsByPatient(patientId) {
    const store = loadStore();
    const list = store.appointments.filter((a) => a.patientId === patientId && a.status !== "cancelled");
    // sort by date ascending
    list.sort((a, b) => (a.date > b.date ? 1 : -1));
    return Promise.resolve(list);
  },

  bookAppointment(patientId, doctorId, slotIso) {
    const store = loadStore();
    const doctor = store.doctors.find((d) => d.id === doctorId);
    if (!doctor) return Promise.reject(new Error("Doctor not found"));
    // check slot available
    const idx = doctor.availableSlots.indexOf(slotIso);
    if (idx === -1) return Promise.reject(new Error("Slot not available"));
    // remove slot
    doctor.availableSlots.splice(idx, 1);
    const apptId = nextId(store.appointments);
    const appt = {
      id: apptId,
      patientId,
      doctorId,
      date: slotIso,
      status: "upcoming"
    };
    store.appointments.push(appt);
    saveStore(store);
    return Promise.resolve(appt);
  },

  cancelAppointment(appointmentId) {
    const store = loadStore();
    const idx = store.appointments.findIndex((a) => a.id === appointmentId);
    if (idx === -1) return Promise.reject(new Error("Appointment not found"));
    const appt = store.appointments[idx];
    appt.status = "cancelled";
    // optionally restore slot back to doctor
    const doctor = store.doctors.find((d) => d.id === appt.doctorId);
    if (doctor) {
      doctor.availableSlots.push(appt.date);
      // keep availableSlots sorted (simple)
      doctor.availableSlots.sort();
    }
    saveStore(store);
    return Promise.resolve(true);
  },

  // Medical history
  getMedicalHistoryByPatient(patientId) {
    const store = loadStore();
    const mh = store.medicalHistories.find((m) => m.patientId === patientId);
    return Promise.resolve(mh || null);
  },

  updateMedicalHistory(patientId, updates) {
    const store = loadStore();
    const mh = store.medicalHistories.find((m) => m.patientId === patientId);
    if (!mh) return Promise.reject(new Error("Medical history not found"));
    Object.assign(mh, updates);
    saveStore(store);
    return Promise.resolve(mh);
  }
};
