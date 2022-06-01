import React from "react";
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Body from "../src/components/Body";

export const AuthContext = React.createContext({});

export default function HomePage({ arrayCountriesRenderizado }) {
  const [arrayCountries, setArrayCountries] = React.useState(arrayCountriesRenderizado);
  const [inputValue, setInputValue] = React.useState("");
  const [region, setRegion] = React.useState("");

  const getInfoApi = async (setArrayCountries, name, region) => {
    const response = await fetch(`/api/home?name=${name}&region=${region}`);
    const array = await response.json();
    setArrayCountries(array);
  }

  return (
    <AuthContext.Provider value={{inputValue, setInputValue, region, setRegion, arrayCountries, setArrayCountries, getInfoApi}}>
      <Header />
      <Search />
      <Body />
    </AuthContext.Provider>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const arrayCountriesRenderizado = await response.json();

  return {
    props: { arrayCountriesRenderizado }
  };
}