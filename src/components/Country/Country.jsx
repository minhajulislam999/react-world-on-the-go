import React from 'react';

const Country = ({ country }) => {
    console.log(country.flags);
    console.log(country);
    return (
        <div>
            <h3>Name:{country.name.common}</h3>
            <img src={country.flags.svg} alt="" />
            {/* <p>Capital: {country.Independent ? country.'Free': ''}</p> */}

        </div>
    );
};

export default Country;