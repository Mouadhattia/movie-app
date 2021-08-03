import React from 'react'
import { Card } from 'react-bootstrap';

import ReactStars from "react-rating-stars-component";

function MovieCard({movie}) {
    return (
        <div>
           <Card className='card' >
  <Card.Img style={{  height:'30rem' }} variant="top" src={movie.posterURL} />
  <Card.Body className='cardbody'>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text >
    <div className='stars'>
    <ReactStars
    
    count={5}
    value={movie.rating}
    size={24}
    activeColor="#ffd700"
    edit= {false}
  />,  
  </div>   
          
         
    
  </Card.Body>
</Card> 
        </div>
    )
}

export default MovieCard
