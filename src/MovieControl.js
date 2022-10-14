import React,{useContext} from 'react'
import { GlobalContext } from './GlobalState'


function MovieControl({movie,type}) {
  const{removeMovieFromWatchlist,addMovieToWatched,movieToWatchlist,removeMovieFromWatched}=useContext(GlobalContext)
  return (
   <div className="inner-card-controls">
    {type === 'watchlist'&&(
      <>
      <button className='ctrl-btn' onClick={()=>removeMovieFromWatchlist(movie.id)}>
        <i className='fa-fw fa fa-times'></i>
       
      </button>
      <button className='ctrl-btn' onClick={()=>addMovieToWatched(movie)}>
      <i className='fa-fw fa fa-eye'></i>
      </button>
    
      </>
    )}

    {type === "Watched" &&(
      <>
       <button className='ctrl-btn' onClick={()=>movieToWatchlist(movie)}>
        <i className='fa-fw far fa-eye-slash'></i>
       
      </button>
      <button className='ctrl-btn' onClick={()=>removeMovieFromWatchlist(movie.id)}>
      <i className='fa-fw fa fa-times'></i>
      </button>
      </>
    )}

   </div>
  )
}

export default MovieControl
