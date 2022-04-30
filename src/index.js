import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import PlayersList from "./components/players-list";

import "./index.scss";

const App = () => {
  const [data, dataSet] = useState({});
  const [currentBtn, currentBtnSet] = useState(0);

  useEffect(() => {
    async function callMe() {
      const res = await fetch("http://localhost:8000/api/game");
      const data = await res.json();
      dataSet({
        ...data,
        players: data.players.map((player, idx) => ({
          ...player,
          initialValue: 0,
          idx,
        })),
      });
    }
    callMe();
  }, []);
  console.log(data);
  return (
    <div className="grid-container">
      <h1 className="heading">BEAT IT</h1>
      <div className="scoretobeat"> Score to Beat: {data.scoreToWin}</div>

      <PlayersList
        data={data}
        dataSet={dataSet}
        currentBtn={currentBtn}
        currentBtnSet={currentBtnSet}
      />
    </div>
  );
};

render(<App />, document.getElementById("app"));
