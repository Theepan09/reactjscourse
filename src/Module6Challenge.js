import React, { useState } from 'react';
import './Style.css';

const Module6Challenge = () => {
  // Initial state for countries
  const [countries, setCountries] = useState([
    { id: 1, name: 'Singapore', city: 'Singapore', population: '6014723' },
    { id: 2, name: 'Thailand', city: 'Bangkok', population: '71801279' },
    { id: 3, name: 'Malaysia', city: 'Kuala Lumpur', population: '34308525' },
    { id: 4, name: 'Indonesia', city: 'Jakarta', population: '227534122' },
    { id: 5, name: 'Philippines', city: 'Manila', population: '117337368' },
  ]);

  const [newCountryName, setNewCountryName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newPopulation, setNewPopulation] = useState('');
  const [updateId, setUpdateId] = useState(null);
  const [updateName, setUpdateName] = useState('');
  const [updateCity, setUpdateCity] = useState('');
  const [updatePopulation, setUpdatePopulation] = useState('');

  // Add a new country
  const addCountry = () => {
    if (newCountryName.trim() && newCity.trim() && newPopulation.trim()) {
      setCountries(prevCountries => [
        ...prevCountries,
        {
          id: Date.now(),
          name: newCountryName,
          city: newCity,
          population: newPopulation,
        },
      ]);
      setNewCountryName('');
      setNewCity('');
      setNewPopulation('');
    }
  };

  // Delete a country by ID
  const deleteById = id => {
    setCountries(prevCountries => prevCountries.filter(country => country.id !== id));
  };

  // Update a country by ID
  const updateCountry = () => {
    setCountries(prevCountries =>
      prevCountries.map(country =>
        country.id === updateId
          ? {
            ...country,
            name: updateName,
            city: updateCity,
            population: updatePopulation,
          }
          : country
      )
    );
    setUpdateId(null);
    setUpdateName('');
    setUpdateCity('');
    setUpdatePopulation('');
  };


  // Sort by Population Ascending
  const sortByPopulationAsc = () => {
    setCountries(prevCountries =>
      [...prevCountries].sort((a, b) => parseInt(a.population) - parseInt(b.population))
    );
  };

  // Sort by Population Descending
  const sortByPopulationDesc = () => {
    setCountries(prevCountries =>
      [...prevCountries].sort((a, b) => parseInt(b.population) - parseInt(a.population))
    );
  };


  return (
    <div>
      <h1>Country Manager</h1>

      {/* Add Country Form */}
      <div>
        <h2>Add New Country</h2>
        <input
          type="text"
          value={newCountryName}
          onChange={e => setNewCountryName(e.target.value)}
          placeholder="Country Name"
        />
        <input
          type="text"
          value={newCity}
          onChange={e => setNewCity(e.target.value)}
          placeholder="City"
        />
        <input
          type="text"
          value={newPopulation}
          onChange={e => setNewPopulation(e.target.value)}
          placeholder="Population"
        />
        <button className="BlueButton" margin-left="10px" onClick={addCountry}>Add Country</button>
        <button className="BlueButton" onClick={sortByPopulationAsc}>Sort by Population Ascending</button>

        <br /><br /><br />

        <input
          type="text"
          value={newCountryName}
          onChange={e => setNewCountryName(e.target.value)}
          placeholder="Country Name"
        />
        <input
          type="text"
          value={newCity}
          onChange={e => setNewCity(e.target.value)}
          placeholder="City"
        />
        <input
          type="text"
          value={newPopulation}
          onChange={e => setNewPopulation(e.target.value)}
          placeholder="Population"
        />


        <button className="BlueButton" onClick={addCountry}>Add Country</button>
        <button className="BlueButton" onClick={sortByPopulationDesc}>Sort by Population Descending</button>
      </div>

      {/* Update Country Form */}
      <div>
        <h2>Update Country</h2>
        <select
          value={updateId || ''}
          onChange={e => setUpdateId(Number(e.target.value))}
        >
          <option value="">Select country to update</option>
          {countries.map(country => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={updateName}
          onChange={e => setUpdateName(e.target.value)}
          placeholder="New Country Name"
        />
        <input
          type="text"
          value={updateCity}
          onChange={e => setUpdateCity(e.target.value)}
          placeholder="New City"
        />
        <input
          type="text"
          value={updatePopulation}
          onChange={e => setUpdatePopulation(e.target.value)}
          placeholder="New Population"
        />
        <button className="UpdateButtonBlack" onClick={updateCountry}>Update Country</button>
      </div>

      {/* List of Countries */}
      <div>
        <h2>Country List</h2>
        <ul>
          {countries.map(country => (
            <li key={country.id}>
              {country.name} - {country.city} - {country.population}
              <button className="DeleteButtonRed" onClick={() => deleteById(country.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Module6Challenge;
