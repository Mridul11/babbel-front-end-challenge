import React, { useState } from "react";
import "./button-roll.scss";

export default function ButtonRoll({
  data,
  player,
  dataSet,
  idx,
  currentBtn,
  currentBtnSet,
}) {
  const rndInt = Math.floor(Math.random() * 6) + 1;

  const handleOnClick = (data, player) => {
    if (currentBtn === data.players.length - 1) {
      currentBtnSet(0);
    } else {
      currentBtnSet((currentBtn) => currentBtn + 1);
    }

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
  console.log(idx, currentBtn);
  return (
    <button
      className={currentBtn !== idx ? "hideBtn" : ""}
      onClick={() => handleOnClick(data, player)}
    >
      Roll
    </button>
  );
}
