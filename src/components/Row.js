import React from 'react';
import {useState,useEffect} from 'react';
import Axios from '../apis/axios';
// import '../styles/Row.css'

function Row(props){

const imageBaseURL="https://image.tmdb.org/t/p/original/";

const [movies,setMovies]=useState([]);
useEffect(()=>{
    Axios.get(props.request).then(response=>{
       // console.log(response.data.results);
        setMovies(response.data.results);
    })
},[]);

const row={
    display:"flex",
    width:'100%',
    height:"180px",
    overflowX:'scroll',
    overFlowY:'none'
}

const row_poster={
    height:'180px'
}


    return(
    <div>
        <h1>{props.title}</h1>
        <div style={row}>
                {
                    movies.map(i=>{
                        return(
                            <img src={`${imageBaseURL}${i.poster_path}`} alt="oopsy" style={row_poster}/>
                        )
                    })
                }
        </div>
    </div>)

}
export default Row;