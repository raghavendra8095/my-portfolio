import React, { Component } from 'react'
import "./Heroimg2.css"
import Introimg from"../assets/banner2.jpg"


class Heroimg2 extends Component {
    render(){
        return (
        <div className="hero-img">
            <div className='mas'>
            <img className='second-img' src={Introimg} alt="image" />
            </div>
            <div className="heading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
      )}
  
}

export default Heroimg2
