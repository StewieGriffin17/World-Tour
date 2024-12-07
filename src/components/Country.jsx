import { useState } from 'react';
import './Components.css';

const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population : {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => {handleVisitedCountries(name?.common), handleVisited()}}>Visited</button>
            <span className={`marker ${visited ? 'check' : 'cross'}`}>{visited ? '\u2713' : '\u2717'}</span>
        </div>
    );
};

export default Country;