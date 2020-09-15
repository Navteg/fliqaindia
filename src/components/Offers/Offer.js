import React, { Component } from 'react'
import $ from 'jquery'
import './Offer.css'

import Slider from "react-slick";
import i1 from './1-min.png'
import i2 from './2-min.png'
import i3 from './3-min.png'
import i4 from './4-min.png'
import i5 from './5-min.png'


const Offer = () => {
  var settings = {
      autoplay:true,
      dots: false,
      infinite: true,
      speed: 1500,
      autoplaySpeed: 0,
      cssEase: 'linear',
      arrows: false,
      slidesToShow: 5,
      slidesToScroll:1,
      responsive: [
      {
        breakpoint: 1024, // width to change options
        settings: {
          slidesToShow: 4.5,
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
        <div className="offer-head">
          <p>Offer For You</p>
        </div>
        <div className="offer-container">
      <Slider {...settings} >
        <div>
          <img src='https://focused-yonath-473677.netlify.app/images/ofy/offer4.png' />
        </div>
        <div>
          <img src='https://focused-yonath-473677.netlify.app/images/ofy/offer5.png' />
        </div>
        <div>
          <img src='https://focused-yonath-473677.netlify.app/images/ofy/offer2.png' />
        </div>
        <div>
          <img src={i3} />
        </div>
        <div>
          <img src='https://focused-yonath-473677.netlify.app/images/ofy/offer3.png' />
        </div>
        <div>
          <img src='https://focused-yonath-473677.netlify.app/images/ofy/offer2.png' />
        </div>
      </Slider>
      </div>
      </>
    )
}

export default Offer
