import React from 'react';
import './Country.css';
import { useState } from 'react';

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);

    const handleNotVisited = () => {
        // if(visited === true){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(!visited);
        handleVisitedCountry(country);

    };


    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name:{country.name.common}</h3>
            <img  src={country.flags.svg} alt="" />
            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Independent: {country.independent ? 'Yes' : 'No'}</p>
            <p>Languages: {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
            <p>Population: {country.population}</p>
            <p>Area: {country.area}</p>
            <p>
                Borders: {country.borders ? country.borders.join(', ') : 'N/A'}

            </p>
            <button className={visited ? 'visited' : 'not-visited'} onClick={handleNotVisited}>
                {visited ? 'Visited' : 'Not Visited'}
               
            </button>

            <button onClick={() => 
                handleVisitedFlag(country.flags.png)}>Visited Flag</button>
            

        </div>
    );
};

export default Country;