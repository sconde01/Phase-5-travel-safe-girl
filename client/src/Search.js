import React from 'react'

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="searchbar flex border border-purple-200 rounded">
    <p htmlFor="search" className='px-4 font-mono text-lg text-white bg-purple-600 border-l rounded text-center'>Search: &#128269;</p>
    <input
      className="block w-full px-24 py-3 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
      type="text"
      id="search"
      placeholder="Type for what you're search for..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>




  )
}

export default Search