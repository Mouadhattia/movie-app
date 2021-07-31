import React from 'react'
import MovieCard from './MovieCard'
import { useState } from 'react';
import Shearch from './Search';



function MovieList({movies}) {
    const [text, setText] = useState('')
    const filtertext = (text) => {
      setText(text)
    }
    return (
        <div>
        <Shearch filtertext={filtertext}/>   
        {movies.filter((el) => (el.title.toLowerCase().includes(text.toLowerCase()) )).map((element) =>
                    <MovieCard movie={element} />
                )}
        
        </div>
    )
}

export default MovieList
