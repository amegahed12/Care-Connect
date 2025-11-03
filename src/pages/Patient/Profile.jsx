import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../../components/common/Avatar";

export default function Profile() {
  const { user, updateProfile, changePassword } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: "", avatarUrl: "", phone: "", email: "", dob: ""
  });
  const [passForm, setPassForm] = useState({ oldPassword: "", newPassword: "", confirm: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        avatarUrl: user.avatarUrl || "",
        phone: user.phone || "",
        email: user.email || "",
        dob: user.dob || ""
      });
    }
  }, [user]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function saveProfile() {
    setMsg("");
    try {
      await updateProfile(form);
      setMsg("Profile updated");
      setEditing(false);
    } catch (err) {
      setMsg(err.message || "Failed to update");
    }
  }

  async function handleChangePassword(e) {
    e.preventDefault();
    setMsg("");
    if (passForm.newPassword !== passForm.confirm) {
      setMsg("New password and confirm do not match");
      return;
    }
    try {
      await changePassword(passForm.oldPassword, passForm.newPassword);
      setMsg("Password changed");
      setPassForm({ oldPassword: "", newPassword: "", confirm: "" });
    } catch (err) {
      setMsg(err.message || "Failed to change password");
    }
  }

  if (!user) return null;

  return (
    <div className="page">
      <h2>My Profile</h2>
      <div className="card profile-card">
        <div className="profile-left">
          <Avatar src={form.avatarUrl} name={form.name} size={96} />
        </div>
        <div className="profile-right">
          {!editing ? (
            <>
              <p><strong>Name:</strong> {form.name}</p>
              <p><strong>Email:</strong> {form.email}</p>
              <p><strong>Phone:</strong> {form.phone}</p>
              <p><strong>DOB:</strong> {form.dob}</p>
              <div style={{ marginTop: 8 }}>
                <button className="cc-btn" onClick={() => setEditing(true)}>Edit Profile</button>
              </div>
            </>
          ) : (
            <>
              <label>Name</label>
              <input name="name" value={form.name} onChange={onChange} />
              <label>Avatar URL</label>
              <input name="avatarUrl" value={form.avatarUrl} onChange={onChange} />
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} />
              <label>Email</label>
              <input name="email" value={form.email} onChange={onChange} />
              <label>DOB</label>
              <input name="dob" type="date" value={form.dob} onChange={onChange} />
              <div style={{ marginTop: 8 }}>
                <button className="cc-btn" onClick={saveProfile}>Save</button>
                <button className="cc-btn link-like" onClick={() => setEditing(false)}>Cancel</button>
              </div>
            </>
          )}

          <hr style={{ margin: "12px 0" }} />

          <h4>Change Password</h4>
          <form onSubmit={handleChangePassword}>
            <label>Old Password</label>
            <input name="oldPassword" type="password" value={passForm.oldPassword} onChange={(e)=> setPassForm(s => ({...s, oldPassword: e.target.value}))} />
            <label>New Password</label>
            <input name="newPassword" type="password" value={passForm.newPassword} onChange={(e)=> setPassForm(s => ({...s, newPassword: e.target.value}))} />
            <label>Confirm New Password</label>
            <input name="confirm" type="password" value={passForm.confirm} onChange={(e)=> setPassForm(s => ({...s, confirm: e.target.value}))} />
            <div style={{ marginTop: 8 }}>
              <button className="cc-btn" type="submit">Change Password</button>
            </div>
          </form>

          {msg && <p className="muted" style={{ marginTop: 8 }}>{msg}</p>}
        </div>
      </div>
    </div>
  );
}
