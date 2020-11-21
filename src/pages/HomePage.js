import React from 'react';
import '../index.css';

import Hero from '../components/hero'

function HomePage(props){
  
  return(
    <div style={{backgroundColor: "lightblue"}}>
    <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
    <button onClick={event =>  window.location.href='/projects'} className="my-Button" style={{backgroundColor: "lightblue", justifyContent:"center",  alignItem:"center" }} > Click here to see projects</button>
    </div>
  )
}

export default HomePage