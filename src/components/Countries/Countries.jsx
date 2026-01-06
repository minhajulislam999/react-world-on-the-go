import React, { use } from 'react';
import Country from '../Country/Country.jsx';
import './countries.css';
import { useState } from 'react';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    // console.log(handleVisitedCountry); 

    const  handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    };

   const countries = use(countriesPromise);

   const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
   }
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h1>Visited Countries: {visitedCountries.length}</h1>
            <div className='visited-flags'>
                {
                visitedFlags.map((flag, index) => 
                <img key={index} src={flag} alt="visited flag" />)
                }
            </div>
            <ol>
                {visitedCountries.map(country => <li>{country.name.common}</li>)}
            </ol>
            <div className='countries'>
                {
                countries.map(country => <Country 
                    key={country.cca2} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlag ={handleVisitedFlag}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;