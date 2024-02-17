import React from 'react'
import"./Aboutstyle.css"
import { Link } from 'react-router-dom'
import about from"../assets/about.jpg"
import about2 from"../assets/about2.jpg"

const AboutContent = () => {
  return (
    <div className='about'>
     <div className='left'>
      <h1>Who Am I ?</h1>
      <p>Enthusiastic engineering graduate with basic knowledge in coding and design.
         Proficient in Java, HTML ,CSS, JavaScript, React Js,SQL,. Ability to learn new softwares and technologies quickly.
          Capability to work in teams by providing valuable support.</p>
      <Link to="/contact">
        <button className='button'>Contact</button>
      </Link>
     </div>
     
     <div className='right'>
      <div className='img-container'>
        <div className='img-stack top'>
          <img src={about} alt="true" className='img' />
        </div>
        <div className='img-stack bottom'>
          <img src={about2} alt="true" className='img' />
        </div>
      </div>

     </div>
    </div>
  )
}

export default AboutContent
