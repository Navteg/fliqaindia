import React, { Component } from 'react'
import './Company.css'
import Slider from 'react-slick'
import sulekha from './download (2).png'
import logo from './logo.png'

const Company = () => {
  var settings = {
      infinite: true,
       autoplay: true,
       speed: 1200,
       autoplaySpeed: 0,
       cssEase: 'linear',
       arrows: false,
      slidesToShow: 5,
      slidesToScroll:1,
      responsive: [
      {
        breakpoint: 1024, // width to change options
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          speed:2500,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
    };
    return (
      <>
      <div className='logos'>
      <Slider {...settings}>
        <div>
          <img style = {{width:'180px',height:'100px'}}
          src='https://cdn1.weddingwire.in/assets/img/logos/gen_logoHeader.svg' />
        </div>
        <div>
          <img style = {{width:'180px',height:'90px'}}
          src='https://focused-yonath-473677.netlify.app/images/logo/untitled%20(4).svg' />
        </div>
        <div>
          <img style = {{width:'180px',height:'90px'}}
          src='https://focused-yonath-473677.netlify.app/images/logo/untitled%20(7).svg' />
        </div>
        <div>
          <img style = {{width:'180px',height:'100px'}}
            src='https://focused-yonath-473677.netlify.app/images/logo/can.svg' />
        </div>
        <div>
          <img style = {{width:'180px',height:'100px'}}
          src='https://focused-yonath-473677.netlify.app/images/logo/untitled%20(2).svg' />
        </div>

        <div>
          <img style = {{width:'180px',height:'100px'}}
            src="https://focused-yonath-473677.netlify.app/images/logo/untitled%20(5).svg" />
        </div>
    
      </Slider>
      </div>
      </>
    )
}

export default Company
