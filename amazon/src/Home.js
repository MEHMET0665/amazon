import React from 'react'
import './Home.css'
import Product from './Product';


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="https://m.media-amazon.com/images/I/61yT2iMlRLL.jpg"/>
     
      <div className="home_row">
      <Product 
      id='125479'
      title='Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal' 
      price={22.99} 
      image="https://images-na.ssl-images-amazon.com/images/I/51EVETDOOeL._AC_UL160_SR160,160_.jpg" 
      rating={5} />
         <Product 
      id='125478'
      title='eplacement Echo Buds Charging Case' 
      price={22.99} 
      image="https://images-na.ssl-images-amazon.com/images/I/51CJy6T51fL._AC_UL160_SR160,160_.jpg" 
      rating={5} />
      
        </div>
      <div className="home_row">
      <Product 
      id='12547'
      title='Govee Immersion WiFi TV LED Backlights with Camera, RGBIC Ambient TV Lighting for 55-65 inch TVs PC, Works with Alexa & Google Assistant, App Control, Lights and Music Sync, Adapter' 
      price={122.99} 
      image="https://images-na.ssl-images-amazon.com/images/I/711PCEIjgkL._AC_UL160_SR160,160_.jpg" 
      rating={5} />
        <Product 
      id='125458'
      title='Gosund Smart Power Strip Work with Alexa Google Home, Smart Plug Mini WiFi Outlets Surge Protector with 3 USB 3 Charging Port for Cruise Ship Travel Multi Plug Extender,10A' 
      price={19.99} 
      image="https://images-na.ssl-images-amazon.com/images/I/61CPQP4TFWL._AC_UL160_SR160,160_.jpg" 
      rating={5} />
         <Product 
      id='125485'
      title='Echo Show 8 Adjustable Stand - Black' 
      price={24.99} 
      image="https://images-na.ssl-images-amazon.com/images/I/51j4HCPYUcL._AC_UL160_SR160,160_.jpg" 
      rating={5} />
      </div>
      <div className="home_row">
      <Product 
      id='1254851'
      title='Stilnend Telescope 70mm Aperture 500mm AZ Mount Astronomical Refractor Telescope for Kids Adults & Beginners Fully Multi-Coated Optics Portable with Tripod Phone Adapte' 
      price={84.99} 
      image="https://images-na.ssl-images-amazon.com/images/I/61ayn0ylVGS._AC_UL200_SR200,200_.jpg" 
      rating={5} />
        </div>
      </div>
    </div>
  )
}

export default Home
