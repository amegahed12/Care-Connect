export default function Avatar({ src, name, size = 64 }) {
  const initials = (name || "").split(" ").map(s => s[0]).join("").slice(0,2).toUpperCase();
  return src ? (
    <img src={src} alt={name || "avatar"} style={{ width: size, height: size, borderRadius: 8 }} />
  ) : (
    <div style={{
      width: size,
      height: size,
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#ddd",
      fontWeight: "700"
    }}>{initials || "U"}</div>
  );
}