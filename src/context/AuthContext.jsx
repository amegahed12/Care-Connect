import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const STORAGE_KEY_USER = "care_connect_user_v1";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_USER);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY_USER);
    }
  }, [user]);

  // register: returns created user or throws
  async function register(patientData) {
    setLoading(true);
    try {
      const created = await api.registerPatient(patientData);
      setUser(created);
      setLoading(false);
      return created;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  }

  async function login(email, password) {
    setLoading(true);
    try {
      const p = await api.login(email, password);
      setUser(p);
      setLoading(false);
      return p;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  }

  function logout() {
    setUser(null);
  }

  async function updateProfile(updates) {
    if (!user) throw new Error("Not logged in");
    const updated = await api.updatePatient(user.id, updates);
    setUser(updated);
    return updated;
  }

  async function changePassword(oldPass, newPass) {
    if (!user) throw new Error("Not logged in");
    return api.changePassword(user.id, oldPass, newPass);
  }

  const value = { user, loading, register, login, logout, updateProfile, changePassword };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}