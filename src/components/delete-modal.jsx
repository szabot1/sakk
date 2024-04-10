import React, { useState } from "react";
import Modal from "../components/modal";

export default function DeleteModal({ id, name, isOpen, setOpen }) {
  const [error, setError] = useState(null);

  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <h1
        style={{
          fontSize: "1.35rem",
          marginBottom: "1rem",
        }}
      >
        Törlés: {name}
      </h1>

      <p style={{ marginBottom: "1rem" }}>
        Biztosan törölni szeretnéd ezt a játékost?
      </p>

      {error && (
        <p
          style={{
            border: "1px solid red",
            padding: "0.5rem",
            background: "rgba(255, 0, 0, 0.1)",
            borderRadius: "4px",
            color: "red",
            marginBottom: "1rem",
          }}
        >
          {error}
        </p>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            color: "blue",
          }}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          Mégsem
        </button>

        <button
          style={{
            color: "red",
          }}
          onClick={() => {
            fetch("https://chess.sulla.hu/chess/" + id, {
              method: "DELETE",
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error(
                    "A törlés sikertelen volt, válasz kód: " + response.status
                  );
                }

                setOpen(!isOpen);
                window.location.reload();
              })
              .catch((error) => {
                setError(error.message);
              });
          }}
        >
          Törlés
        </button>
      </div>
    </Modal>
  );
}
