import React from 'react'

function Search(filtertext) {
    return (
        <div>
            <h1>Movie App</h1>
            <form >
        <input
        
          placeholder='Search Movies'

          type="text"
          onChange={(event)=>filtertext(event.target.value)}
        />

      </form>
        </div>
    )
}

export default Search
