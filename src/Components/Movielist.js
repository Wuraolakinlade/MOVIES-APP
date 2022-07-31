import React,{useEffect, useState} from 'react'
import Movieitem from './Movieitem'
import axios from "axios";

 const Movielist=()=> {

    const [items, setitems]= useState([])

    useEffect (()=>{
      
      const key= "690d1e3621014e3dcc42ddbac1637517";
      const getmoviedata= async()=> {
  
          const res= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=690d1e3621014e3dcc42ddbac1637517`);
          setitems(res.data.results);
      }
      getmoviedata();
  
    }, [])

   
  return (
    <div>
       <div className="container">
        <div className="row">

          {items.map((item)=>( 
          <Movieitem key={item.id} item={item}/>
          ))}
       

        </div>
       </div>
    </div>
  )
}

export default Movielist