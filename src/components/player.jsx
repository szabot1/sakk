import React, { useState } from "react";
import DeleteModal from "./delete-modal";
import ModifyModal from "./modify-modal";

export default function Player({
  id,
  name,
  birth_date,
  world_ch_won,
  profile_url,
  image_url,
}) {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isModifyModalOpen, setModifyModalOpen] = useState(false);

  return (
    <>
      <DeleteModal
        id={id}
        name={name}
        isOpen={isDeleteModalOpen}
        setOpen={setDeleteModalOpen}
      />

      <ModifyModal
        id={id}
        name={name}
        birth_date={birth_date}
        world_ch_won={world_ch_won}
        profile_url={profile_url}
        image_url={image_url}
        isOpen={isModifyModalOpen}
        setOpen={setModifyModalOpen}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <img
            src={image_url}
            alt={name}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://via.placeholder.com/256?text=${name}`;
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "1.5rem",
              }}
            >
              {name}
            </h1>
            <div style={{ display: "flex", gap: "0.2rem" }}>
              <p>Született: </p>
              <span>{birth_date}</span>
            </div>
            <div style={{ display: "flex", gap: "0.2rem" }}>
              <p>Nyert világbajnokságok: </p>
              <span>{world_ch_won}</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <a
            style={{
              textDecoration: "none",
            }}
            href={profile_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia oldal <i className="bi bi-box-arrow-up-right"></i>
          </a>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <button
              style={{
                color: "orange",
              }}
              onClick={() => {
                setModifyModalOpen(!isModifyModalOpen);
              }}
            >
              <i className="bi bi-pencil"></i>
            </button>

            <button
              style={{
                color: "red",
              }}
              onClick={() => {
                setDeleteModalOpen(!isDeleteModalOpen);
              }}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
