import React,{useState} from 'react'
import  ResultCard  from "./ResultCard";

function Add() {
  const[query,setquery] = useState("")
  const[results,setResults]=useState([]);

  const onchange = (e)=>{
    e.preventDefault();

    setquery(e.target.value);

    fetch(  `https://api.themoviedb.org/3/search/movie?api_key=4e4782dd566be3e5be1b94fc0af400de&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };


  return (
    
   <div className="add-page">
    <div className="container">
      <div className="add-content">
        <div className="input-wrapper">
          <input type="text" placeholder='search for a movie ' value={query} onChange={onchange}/>
        </div>
        {results.length >0&&(
          <ul className="result">
            {results.map(movie =>(
              <li key={movie.id}>
              <ResultCard movie={movie} />
            </li>
            ))}
          </ul>
        )}
      </div>
    </div>
   </div>
  )
}

export default Add