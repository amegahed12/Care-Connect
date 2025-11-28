import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PatientRegister() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "", avatarUrl: "", phone: "", email: "", password: "", dob: ""
  });
  const [error, setError] = useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.password) {
      setError("Please fill required fields (name, email, password)");
      return;
    }
    try {
      await register(form);
      nav("/patient/profile");
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  }

  return (
    <div className="page auth-page">
      <h2>Register (Patient)</h2>
      <form onSubmit={handleSubmit} className="card form-card">
        <label>Name</label>
        <input name="name" value={form.name} onChange={onChange} />
        <label>Avatar URL (optional)</label>
        <input name="avatarUrl" value={form.avatarUrl} onChange={onChange} />
        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={onChange} />
        <label>Email</label>
        <input name="email" value={form.email} onChange={onChange} />
        <label>Password</label>
        <input name="password" type="password" value={form.password} onChange={onChange} />
        <label>Date of birth</label>
        <input name="dob" type="date" value={form.dob} onChange={onChange} />
        <div style={{ marginTop: 10 }}>
          <button className="cc-btn" type="submit">Register</button>
        </div>
        {error && <p className="form-error">{error}</p>}
      </form>
    </div>
  );
}
