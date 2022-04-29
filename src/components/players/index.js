import React, { useEffect } from "react";
import ButtonRoll from "../button-roll";
import "./players.scss";

export default function Players({ data, player, dataSet, idx }) {
  useEffect(() => {
    if (player.initialValue >= data.scoreToWin) {
      fetch("http://localhost:8000/api/game", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matchId: data.matchId, winnerId: player.id }),
      });
    }
  });
  return (
    <li>
      <img src={player.imageUrl} alt={player.name} />
      <p>{player.name}</p>
      <p>{player.initialValue}</p>
      {data.scoreToWin && (
        <p>{player.initialValue >= data.scoreToWin ? "Winner" : ""}</p>
      )}
      <ButtonRoll player={player} dataSet={dataSet} data={data} idx={idx} />
    </li>
  );
}
