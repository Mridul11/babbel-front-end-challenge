import React from "react";
import "./button-roll.scss";

export default function ButtonRoll({ data, player, dataSet, disbleAll }) {
  const rndInt = Math.floor(Math.random() * 6) + 1;

  const handleOnClick = (data, player) => {
    dataSet({
      ...data,
      players: data.players.map((obj) => {
        if (obj.id === player.id) {
          return {
            ...player,
            initialValue: player.initialValue + rndInt,
          };
        }
        return obj;
      }),
    });
  };

  return (
    <button disabled={disbleAll} onClick={() => handleOnClick(data, player)}>
      Roll
    </button>
  );
}
