import React from "react";
import useSWR from "swr";
import { Country } from "../Country/Country";

import classes from "./App.module.scss";

interface CountryData {
  recovered: number;
  confirmed: number;
  deaths: number;
}

interface Countries {
  [key: string]: CountryData;
}

async function fetchCountries(): Promise<Countries> {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://coronaapi.com/api"
  );
  return await response.json();
}

export function App() {
  const { data: countries, error, isValidating } = useSWR(
    "countryData",
    fetchCountries,
    { revalidateOnFocus: false }
  );
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
  if (isValidating) {
    return <div>Loading...</div>;
  }
  if (countries) {
    return (
      <div className={classes.countries}>
        {Object.entries(countries)
          .filter(([key, data]) => data.confirmed > 0)
          .sort(([ai, a], [bi, b]) => b.confirmed - a.confirmed)
          .map(([name, data], index) => (
            <Country key={name} name={name} {...data} rank={index} />
          ))}
      </div>
    );
  }
  return <div>There is a catastrophic problem!</div>;
}
