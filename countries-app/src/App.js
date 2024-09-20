import './App.css';
import { useState, useEffect } from 'react'
import countryAPI from './services.js'
import CountryList from "./CountryList.js"
import CountryDisplay from "./CountryDisplay.js"

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [currCountry, setCurrCountry] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);

  const onSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    if(value === ""){
      setCountries(null);
      setCurrCountry(null);
      return;
    }

    countryAPI.getCountries().then(
      (response) => {
        const tempList = 
          response
          .filter(country => country.name.common.toLowerCase().includes(value))
          .map((country) => country.name.common);
        setCountries(tempList);
        setCurrCountry(tempList.length == 1 ? 
          tempList[0] : null);
      }
    );
    
  };

  const onCountryChange = () => {
    if(currCountry === null){
      setCountryInfo(null);
      return;
    }
      

    countryAPI.getCountryInfo(currCountry)
    .then(info => {
        console.log(info);
        setCountryInfo(info);
    });
  }

  useEffect(onCountryChange, [currCountry]);

  return (
    <div className="App">
      <div className="searchBar">
        <text>find countries</text>
        <input value={search} onChange={onSearchChange}></input>
      </div>

      <CountryList 
        countries={countries}
        className="Countries"
        setCurrCountry={setCurrCountry}
        currCountry={currCountry}/>

      <CountryDisplay info={countryInfo}/>

    </div>
  );
}

export default App;
