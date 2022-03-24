import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country);
    const{ name, population, area, region, flags} = props.country;
    return (
        <div className='country'>
            <h3>Country: {name}</h3>
            <p>Population: {population}</p>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;