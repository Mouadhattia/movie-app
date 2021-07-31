
import './App.css';
import {useState} from 'react'
import MovieList from './Components/MovieList';
import Add from './Components/Add';



function App() {


  const [movies, setmovies] = useState([
    {title:"Game of Thrones",
    description:"got movie ",
    posterURL:"https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
    rating:"5"},
    {title:"breaking bad",
    description:"bb movie ",
    posterURL:"https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
    rating:"4"},
    {
      title:"Hunter X Hunter",
    description:"hxh movie ",
    posterURL:"https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
    rating:"4"
    }
  ]);
  const AddMovies = (addmovie) => {
    setmovies((movies) =>
        ([...movies, addmovie]))        
}

  return (
    <div className="App">
      
      
     <MovieList movies={movies}/>
     <Add AddMovies={AddMovies}/>
    </div>
  );
}

export default App;
