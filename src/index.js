import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import PlayersList from "./components/players-list";

import "./index.scss";

const App = () => {
  const [data, dataSet] = useState({});
  const [disbleAll, disbleAllSet] = useState(false);
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
      <PlayersList
        data={data}
        dataSet={dataSet}
        disbleAll={disbleAll}
        disbleAllSet={disbleAllSet}
        currentBtn={currentBtn}
        currentBtnSet={currentBtnSet}
      />
      <div className="scoretobeat"> Score to Beat: {data.scoreToWin}</div>
    </div>
  );
};

render(<App />, document.getElementById("app"));
