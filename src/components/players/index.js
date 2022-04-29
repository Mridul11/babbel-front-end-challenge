import React, { useEffect, useState } from "react";
import ButtonRoll from "../button-roll";
import "./players.scss";

export default function Players({
  data,
  player,
  dataSet,
  idx,
  disbleAllSet,
  disbleAll,
  currentBtn,
  currentBtnSet
}) {
  useEffect(() => {
    if (player.initialValue >= data.scoreToWin) {
      fetch("http://localhost:8000/api/game", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matchId: data.matchId, winnerId: player.id }),
      });
      disbleAllSet(true);
    }
  });
  return (
    <li>
      <p>{player.name}</p>
      <img src={player.imageUrl} alt={player.name} />
      <p>{player.initialValue}</p>
      {data.scoreToWin && (
        <p>{player.initialValue >= data.scoreToWin ? "Winner" : ""}</p>
      )}
      <ButtonRoll
        disbleAllSet={disbleAllSet}
        disbleAll={disbleAll}
        player={player}
        dataSet={dataSet}
        data={data}
        idx={idx}
        currentBtn={currentBtn}
        currentBtnSet={currentBtnSet}
      />
    </li>
  );
}
