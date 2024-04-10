import { createPortal } from "react-dom";

export default function Modal({ isOpen, setOpen, children }) {
  if (!isOpen) return null;

  return createPortal(
    <section
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "4px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </section>,
    document.getElementById("modal-root")
  );
}
