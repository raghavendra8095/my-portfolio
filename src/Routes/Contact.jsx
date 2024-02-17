import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import ConatctForm from '../Components/ConatctForm'

const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg2 heading="Contact." text="Lets Have Chat"/>
     <ConatctForm/>
     <Footer/>
    </div>
  )
}

export default Contact
