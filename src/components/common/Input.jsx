export default function Input({ id, name, value, onChange, type = "text", placeholder = "" }) {
  return (
    <input
      id={id || name}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="cc-input"
    />
  );
}