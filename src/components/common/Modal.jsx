export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {title && <h3>{title}</h3>}
        <div className="modal-body">{children}</div>
        <div style={{ textAlign: "right", marginTop: 12 }}>
          <button className="cc-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}