import Input from "./Input";

export default function FormField({ label, children, error }) {
  return (
    <div className="form-field">
      {label && <label className="form-label">{label}</label>}
      {children}
      {error && <small className="form-error">{error}</small>}
    </div>
  );
}
