import React from "react";

import classes from "./Country.module.scss";

interface Props {
  name: string;
  recovered: number;
  confirmed: number;
  deaths: number;
  rank: number;
}

export function Country({ name, recovered, confirmed, deaths, rank }: Props) {
  return (
    <div className={classes.country}>
      <h1>
        {rank + 1}
      </h1>
      <h1>{name}</h1>
      <div className={classes.data}>
        <div className={classes.col}>
          <strong>Recovered:</strong>
          <strong>Confirmed:</strong>
          <strong>Deaths:</strong>
        </div>
        <div className={classes.col}>
          <div>{recovered}</div>
          <div>{confirmed}</div>
          <div>{deaths}</div>
        </div>
      </div>
    </div>
  );
}
