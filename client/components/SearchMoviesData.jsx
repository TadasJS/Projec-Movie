import axios from 'axios';
import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';


export function SearchMovieData(props) {
  const [movieList, setMovieList] = useState([]);
 console.log('cia propsai search',props.search)
  useEffect(() => { 
    axios
      .post('http://localhost:3000/api/movies/search', {data:props.search})
      .then((response) => {
        console.log('cia response is SMD', response)
        setMovieList(response.data.data);
      })
      .catch((error) => console.error("Fetching movie list failed:", error));
  }, [props.search]);
 
console.log('cia movie list',movieList)
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4  g-4">
      
      {movieList.length === 0 ? (
        <p>Nothing to find</p>
      ) : (
        movieList.map((movie) => ( 
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          description={movie.description}
          img={movie.img_url}
          thumb={movie.thumbnail_url}
          year={movie.year}
          rating={movie.rating}
          genreType={movie.genre_type}
            />
        ))
        )}
    </div>
  );
}