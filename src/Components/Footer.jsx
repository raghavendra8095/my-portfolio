import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./footerstyle.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p> #41 SM Krishna nagar. </p>
              <p>Gadag-582101</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91 8618637005
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              raghavendrataranal@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Social Media</h4>
          <div className="social">
            <a href="https://www.instagram.com/raghu_taranal?igsh=ZGUzMzM3NWJiOQ==">
              {" "}
              <FaInstagram
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>

            <a href="https://www.linkedin.com/in/raghavendra-taranal-403219224">
              {" "}
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>

            <a href="https://github.com/raghavendra8095">
              {" "}
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
