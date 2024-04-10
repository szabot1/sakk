import React, { useState } from "react";
import Modal from "./modal";

export default function CreateModal({ isOpen, setOpen }) {
  const [error, setError] = useState(null);

  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <h1
        style={{
          fontSize: "1.35rem",
          marginBottom: "1rem",
        }}
      >
        Új játékos felvétele
      </h1>

      <form
        id="create-form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.15rem",
          marginBottom: "1rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();

          let form = e.target;

          fetch("https://chess.sulla.hu/chess", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: form.name.value,
              birth_date: form.birth_date.value,
              world_ch_won: form.world_ch_won.value,
              profile_url: form.profile_url.value,
              image_url: form.image_url.value,
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(
                  "A felvétel sikertelen volt., válasz kód: " + response.status
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
        <label htmlFor="name">Név</label>
        <input
          style={{
            border: "1px solid #ccc",
            padding: "4px 3px 4px 3px",
            borderRadius: "4px",
            marginBottom: "0.5rem",
          }}
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="birth_date">Születési dátum</label>
        <input
          style={{
            border: "1px solid #ccc",
            padding: "4px 3px 4px 3px",
            borderRadius: "4px",
            marginBottom: "0.5rem",
          }}
          type="date"
          id="birth_date"
          name="birth_date"
          required
        />

        <label htmlFor="world_ch_won">Nyert világbajnokságok</label>
        <input
          style={{
            border: "1px solid #ccc",
            padding: "4px 3px 4px 3px",
            borderRadius: "4px",
            marginBottom: "0.5rem",
          }}
          type="number"
          id="world_ch_won"
          name="world_ch_won"
          required
        />

        <label htmlFor="profile_url">Wikipedia oldal</label>
        <input
          style={{
            border: "1px solid #ccc",
            padding: "4px 3px 4px 3px",
            borderRadius: "4px",
            marginBottom: "0.5rem",
          }}
          type="url"
          id="profile_url"
          name="profile_url"
          required
        />

        <label htmlFor="image_url">Profilkép URL</label>
        <input
          style={{
            border: "1px solid #ccc",
            padding: "4px 3px 4px 3px",
            borderRadius: "4px",
          }}
          type="url"
          id="image_url"
          name="image_url"
          required
        />
      </form>

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
          type="button"
        >
          Mégsem
        </button>

        <button
          style={{
            color: "#1f991f",
          }}
          type="submit"
          form="create-form"
        >
          Felvétel
        </button>
      </div>
    </Modal>
  );
}