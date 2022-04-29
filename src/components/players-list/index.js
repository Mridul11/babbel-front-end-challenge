import React from "react";
import Players from "../players";

import "./players-list.scss";

const PlayersList = ({ data, dataSet, disbleAllSet, disbleAll }) => {
  return (
    <ul>
      {data.players &&
        data.players.map((player, idx) => (
          <Players
            disbleAllSet={disbleAllSet}
            disbleAll={disbleAll}
            key={idx}
            idx={idx}
            data={data}
            player={player}
            dataSet={dataSet}
          />
        ))}
    </ul>
  );
};
export default PlayersList;
