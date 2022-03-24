import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Visiting Every Country in the World!!!</h1>
            <h2>Available country : {countries.length}</h2>
            <div className='countries-container'>
            {
                countries.map(country => <Country
                country={country}
                key={country.alpha2Code}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;