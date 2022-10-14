import React,{useContext} from 'react'
import { GlobalContext } from './GlobalState';
import MovieCard from './MovieCard';


function  Watched() {
  const{watched}=useContext(GlobalContext)
  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
        <h1 className="heading">
        Watched MOVIE
        </h1>
      </div>
      {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="Watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
   </div>
  )
}

export default Watched;