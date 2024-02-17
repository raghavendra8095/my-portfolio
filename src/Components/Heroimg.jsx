import React from 'react'
import "./heroimg.css"
import Introimg from"../assets/banner5.jpg"
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Introimg} alt="image" />
      </div>
      <div className="content">
        <h2>HI, I am Raghavendra</h2>
        <h1>Welcome to my world.</h1>
        <div>
          <Link
            to="https://drive.google.com/file/d/1RUMjc-qbWTEDqS_xyYv0uSzV9D110ZGZ/view?usp=drive_link"
            className="button"
          >
            Get_cv
          </Link>
          {/* <Link to="/contact" className="btn-light">
            Contact
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Heroimg
