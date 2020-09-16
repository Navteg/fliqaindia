import React, { Component } from 'react'
import './WeddingShoot.css'
import Slider from 'react-slick'

const WeddingShoot = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    slidesToShow: 4,
    slidesToScroll:1,
    responsive: [
    {
      breakpoint: 1024, // width to change options
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 1,
        speed:2500
      }
    }
  ]

  };
    return (
      <>
        <div className="container-3">
            <Slider {...settings}>
              <div id='shop'>
                <img id="img-drone" style = {{width:'170px',height:'135px',position:'absolute',top:'25px'}}
                src='https://focused-yonath-473677.netlify.app/svg/drone.svg' />
                <p style={{top:'140px',position:'absolute'}}>DRONE SERVICE</p>
              </div>
              <div id='shop'>
                <img id="img-pre" style = {{width:'170px',height:'135px',position:'absolute',top:'23px'}}
                src='https://focused-yonath-473677.netlify.app/svg/love.svg' />
                <p style={{top:'140px',position:'absolute'}}>PRE WEDDING SHOOT</p>
              </div>
              <div id='shop'>
                <img  id="img-beach"style = {{width:'170px',height:'138.8px',position:'absolute',top:'25px'}}
                src='https://focused-yonath-473677.netlify.app/svg/beach.svg' />
                <p style={{top:'140px',position:'absolute'}}>BEACH PHOTOGRAPHY</p>
              </div>
              <div id='shop'>
                <img id="img-port" style = {{width:'150px',height:'140px',position:'absolute',top:'5px'}}
                  src="https://focused-yonath-473677.netlify.app/svg/influencer.svg" />
                  <p style={{top:'140px',position:'absolute'}} id='p-port'>PORTFOLIO SHOOT</p>
              </div>
              <div id='shop'>
                <img id="img-graph" style={{width:'150px',height:'137px',position:'absolute',top:'5px'}}
                src="https://focused-yonath-473677.netlify.app/svg/graphics.svg" />
                <p style={{top:'140px',position:'absolute'}}>GRAPHICS</p>
              </div>
              <div id='shop' >
                <img id="img-wed" style={{width:'170px',height:'135px'}}
                src="https://focused-yonath-473677.netlify.app/svg/wedding.svg" />
                <p id='p-wed'>WEDDING PHOTOGRAPHY</p>
                </div>
            </Slider>
            </div>
      </>

    )
}

export default WeddingShoot
