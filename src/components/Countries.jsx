import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Components.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[]);

    const handleVisitedCountries = country => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    }
 
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} handleVisitedCountries = {handleVisitedCountries} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;