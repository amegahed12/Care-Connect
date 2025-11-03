import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api";

export default function MedicalHistory() {
  const { user } = useAuth();
  const [history, setHistory] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ conditions: "", medications: "", allergies: "", notes: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!user) return;
    api.getMedicalHistoryByPatient(user.id).then((m) => {
      setHistory(m);
      if (m) setForm({ conditions: m.conditions, medications: m.medications, allergies: m.allergies, notes: m.notes });
    });
  }, [user]);

  async function saveHistory(e) {
    e && e.preventDefault();
    setMsg("");
    try {
      const updated = await api.updateMedicalHistory(user.id, form);
      setHistory(updated);
      setEditing(false);
      setMsg("Medical history updated");
    } catch (err) {
      setMsg(err.message || "Update failed");
    }
  }

  if (!history) return <div className="page"><p>Loading...</p></div>;

  return (
    <div className="page">
      <h2>Medical History</h2>
      <div className="card">
        {!editing ? (
          <>
            <p><strong>Conditions:</strong> {history.conditions || "-"}</p>
            <p><strong>Medications:</strong> {history.medications || "-"}</p>
            <p><strong>Allergies:</strong> {history.allergies || "-"}</p>
            <p><strong>Notes:</strong> {history.notes || "-"}</p>
            <div style={{ marginTop: 8 }}>
              <button className="cc-btn" onClick={() => setEditing(true)}>Edit</button>
            </div>
          </>
        ) : (
          <form onSubmit={saveHistory}>
            <label>Conditions</label>
            <textarea value={form.conditions} onChange={(e) => setForm(s => ({ ...s, conditions: e.target.value }))} />
            <label>Medications</label>
            <textarea value={form.medications} onChange={(e) => setForm(s => ({ ...s, medications: e.target.value }))} />
            <label>Allergies</label>
            <textarea value={form.allergies} onChange={(e) => setForm(s => ({ ...s, allergies: e.target.value }))} />
            <label>Notes</label>
            <textarea value={form.notes} onChange={(e) => setForm(s => ({ ...s, notes: e.target.value }))} />
            <div style={{ marginTop: 8 }}>
              <button className="cc-btn" type="submit">Save</button>
              <button className="cc-btn link-like" type="button" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </form>
        )}
        {msg && <p className="muted" style={{ marginTop: 8 }}>{msg}</p>}
      </div>
    </div>
  );
}
