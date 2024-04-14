import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {


    const [searchTerm, setSearchTerm] = useState()

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(searchTerm)
    }

  return (
     <form onSubmit={handleSubmit} className='flex items-center'>
        <input type="text" placeholder='Search' value={searchTerm} 
        onChange={handleChange} 
        className='focus:outline-none rounded-md py-2 px-4 text-gray-600'/>
        <button type='submit'
            className='ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md 
            focus:outline-none  '>Search</button>
     </form>
  )
}

export default SearchBar