import React from 'react';
import {useState,useEffect} from 'react';
import Axios from '../apis/axios'

function Banner(props){

 const imageBaseURL="https://image.tmdb.org/t/p/original/";
 const[movie,setMovie]=useState([]); 

 const fetchURL=props.request;

 useEffect(()=>{
     Axios.get(props.request).then(response=>{
          //console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
          setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
          console.log(movie)
          
     });
 },[fetchURL]);


const btn_style={
    cursor:"'pointer",
    outline:'none',
    border:'none',
    fontWeight:'700',
    backgroundColor:'rgba(51,51,51,0.5)',
    height:'40px',
    marginLeft:'60px',
    width:'150px',
    borderRadius:'5px',
    color:'white'

}


    return(
        <div style={{backgroundImage:`url(${imageBaseURL}${movie?.backdrop_path})`,
                     backgroundSize:"cover",
                     height:"450px",
                     color:'white',
                     backgroundPosition:'center center'}}>
         
          <h1 style={{color:'white',paddingLeft:'10px',paddingTop:'100px',fontSize:'90px'}}>{movie?.title}</h1>


            <header style={{display:'flex'}}>
                  <button style={btn_style}>PLAY</button>
                  <button style={btn_style}>MY  PLAYLIST</button>
            </header>

       
        <p style={{paddingTop:'30px'}}>{movie?.overview}</p>

        </div>
    )
}export default Banner;
