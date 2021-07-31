import React from 'react'
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

function MovieCard({movie}) {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterURL} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
    
    <StarRatingComponent value={movie.rating} />
          
         
    
  </Card.Body>
</Card> 
        </div>
    )
}

export default MovieCard
