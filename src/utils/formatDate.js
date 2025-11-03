// very small helper to format ISO-ish strings "YYYY-MM-DDTHH:mm"
export function formatDateShort(isoStr) {
  if (!isoStr) return "";
  const d = new Date(isoStr);
  if (Number.isNaN(d.getTime())) return isoStr;
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString(undefined, { month: "short" });
  const year = d.getFullYear();
  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${day} ${month} ${year} - ${hours}:${minutes} ${ampm}`;
}