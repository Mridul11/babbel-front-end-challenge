import React from "react";
import "./button-roll.scss";

export default function ButtonRoll({ data, player, dataSet }) {
  const rndInt = Math.floor(Math.random() * 6) + 1;

  const handleOnClick = (data, player) => {
    dataSet({
      ...data,
      players: data.players.map((obj) => {
        if (obj.id === player.id) {
          return {
            ...player,
            initialValue: player.initialValue + rndInt,
            disabled: !player.disabled,
          };
        }
        return obj;
      }),
    });
  };

  return <button onClick={() => handleOnClick(data, player)}>Roll</button>;
}
