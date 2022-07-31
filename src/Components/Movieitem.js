import React from 'react'
import "./Movieitem.css"

function Movieitem({item}) {
  const key= "690d1e3621014e3dcc42ddbac1637517";
  const baseurl=`https://image.tmdb.org/t/p/w500/`

  //https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US

  return (
    <div className="card col-lg-3 moviecard">
      <img src={`${baseurl}${item.poster_path}`} className="img-fluid" alt="img"/>
       <div className="card-body">
        <h3> Rating:{item.vote_average}</h3>
       </div>  
    </div>
  )
}

export default Movieitem