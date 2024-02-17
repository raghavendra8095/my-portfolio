import React from 'react'
import java from '../assets/java-logo-1.png'
import js from '../assets/js.png'
import sql from '../assets/pngwing.com.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/1174949_js_react js_logo_react_react native_icon.png'
import 'bootstrap/dist/css/bootstrap.min.css'


const Skills = () => {
  return (
    <div className="container text-center --bs-body-bg">
      <div >
        <h1 style={{fontSize:'80px'}}>Skills.</h1>
        <br />
      </div>
    <div className="row">
      <div className="col">
        <img src={java} alt="" width='150px' height='150px'/>
      </div>
      <div className="col">
      <img src={sql} alt="" width='150px' height='150px'/>
      </div>
      <div className="col">
      <img src={js} alt="" width='150px' height='150px'/>
      </div>
      <div className='row'>
        <br />
        <br />

      </div>
      <div className="row">
      <div className="col">
      <img src={html} alt="" width='150px' height='150px'/>
      </div>
      <div className="col">
      <img src={css} alt="" width='150px' height='150px'/>
      </div>
      <div className="col">
      <img src={react} alt="" width='150px' height='150px'/>
      </div>
      </div>
    </div>
  </div>
           
  )
}

export default Skills
