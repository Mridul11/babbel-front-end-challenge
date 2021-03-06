import React, { useEffect } from "react";
import ButtonRoll from "../button-roll";
import "./players.scss";

function Player({
  data,
  player,
  dataSet,
  idx,
  currentBtn,
  currentBtnSet,
}) {
  useEffect(() => {
    if (player.initialValue >= data.scoreToWin) {
      fetch("http://localhost:8000/api/game", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matchId: data.matchId, winnerId: player.id }),
      });
      currentBtnSet(-1);
    }
  }, [player.initialValue]);
  return (
    <li>
      <p>{player.name}</p>
      <img src={player.imageUrl} alt={player.name} />
      <p>{player.initialValue}</p>
      {data.scoreToWin && (
        <p>{player.initialValue >= data.scoreToWin ? "Winner" : ""}</p>
      )}
      <ButtonRoll
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

const Players = React.memo(Player, (nextProps, nextState) => {
  if(nextProps.player.initialValue >= nextProps.data.scoreToWin) {
    return true;
  }
});

export default Players;