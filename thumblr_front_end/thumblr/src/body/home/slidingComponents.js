import React, { Component } from 'react';
import Slider from './slider';
// import Login from "../login"


import Image1 from "../assets/wall1.jpg"
import Image2 from "../assets/wall2.jpg"
import Image3 from "../assets/wall3.jpg"
import Image4 from "../assets/wall4.jpg"
import Image5 from "../assets/wall5.jpg"
import Image6 from "../assets/wall6.jpg"
import Image7 from "../assets/wall7.jpg"
import Image8 from "../assets/wall8.jpg"

const images = [Image1, Image2, Image3,Image4, Image5,Image6, Image7, Image8]

export default class Home extends Component {
  render() {
    return (
      <>
        <div className = "display_container">
          <div className = "slider" style={{ display: 'flex', justifyContent: 'space-between' }} />
          {/* <Login></Login> */}
          <Slider
            options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              wrapAround: false,
              fullscreen: true,
              adaptiveHeight: true,
            }}
          > 
            {images.map((image, index) => (
              <div style={{ width: '100%', height: "100%", margin: '0 0.5em' }} key={index}>
                <img src={image} alt="" />
              </div>
            ))}
          </Slider>
          
          
        </div>
        
        </>
    );
  }
}