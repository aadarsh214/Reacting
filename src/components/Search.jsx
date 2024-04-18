import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchText, 'in city:', selectedCity);
    // Add your search functionality here
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          className="search__input h-fit w-96 px-3 py-2 rounded-l-full focus:outline-black text-sm"
          placeholder="Search"
        />
        <select
          value={selectedCity}
          onChange={handleFilterChange}
          className="bg-white border-none focus:outline-none px-3 py-2 rounded-r-full ml-2 text-sm"
        >
          <option value="">All Cities</option>
          <option value="New York">Mumbai</option>
          <option value="Los Angeles">Delhi</option>
          <option value="Chicago">Gujrat</option>
          {/* Add more city options as needed */}
        </select>
        <button type="submit" className="search__button px-3 py-2 bg-blue-500 text-white rounded-full ml-2 focus:outline-none text-sm">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
