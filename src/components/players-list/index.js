import React from "react";
import Players from "../players";

import "./players-list.scss";

const PlayersList = ({ data, dataSet, currentBtn, currentBtnSet }) => {
  return (
    <ul>
      {data.players &&
        data.players.map((player, idx) => (
          <Players
            key={idx}
            idx={idx}
            data={data}
            player={player}
            dataSet={dataSet}
            currentBtn={currentBtn}
            currentBtnSet={currentBtnSet}
          />
        ))}
    </ul>
  );
};
export default PlayersList;
