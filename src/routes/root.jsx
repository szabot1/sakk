import React, { useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import Player from "../components/player";
import CreateModal from "../components/create-modal";

export default function Root() {
  const data = useLoaderData();
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  return (
    <>
      <CreateModal isOpen={isCreateModalOpen} setOpen={setCreateModalOpen} />

      <nav
        style={{
          display: "flex",
          padding: "6px 12px 6px 12px",
          gap: "1rem",
          justifyContent: "space-between",
          placeItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.25rem",
          }}
        >
          Sakk játékosok
        </h1>

        <button
          style={{
            color: "#1f991f",
          }}
          onClick={() => {
            setCreateModalOpen(!isCreateModalOpen);
          }}
        >
          Új játékos felvétele
        </button>
      </nav>

      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {data.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            birth_date={player.birth_date}
            world_ch_won={player.world_ch_won}
            profile_url={player.profile_url}
            image_url={player.image_url}
          />
        ))}
      </main>
    </>
  );
}

Root.loader = async () => {
  const res = await fetch("https://chess.sulla.hu/chess");
  const data = await res.json();
  return json(data);
};
