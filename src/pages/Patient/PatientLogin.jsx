import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PatientLogin() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showResetUi, setShowResetUi] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await login(form.email, form.password);
      nav("/patient/profile");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  }

  return (
    <div className="page auth-page">
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit} className="card form-card">
        <label>Email</label>
        <input name="email" value={form.email} onChange={onChange} />
        <label>Password</label>
        <input name="password" type="password" value={form.password} onChange={onChange} />
        <div style={{ marginTop: 10 }}>
          <button className="cc-btn" type="submit">Login</button>
        </div>
        <div style={{ marginTop: 8 }}>
          <button type="button" className="link-like" onClick={() => setShowResetUi((s) => !s)}>
            Forgot password
          </button>
        </div>

        {showResetUi && (
          <div className="muted" style={{ marginTop: 8 }}>
            This is UI-only. Actual reset is not implemented.
          </div>
        )}

        <div style={{ marginTop: 12 }}>
          <p>Don't have an account? <Link to="/patient/register">Register</Link></p>
        </div>

        {error && <p className="form-error">{error}</p>}
      </form>
    </div>
  );
}
