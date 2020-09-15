import React from 'react'
import './Appriciated.css'
import Slider from 'react-slick'
import logo from './logo.png'

const Appriciated = () => {

var settings = {
      infinite: true,
       autoplay: true,
       speed: 4000,
       autoplaySpeed: 0,
       cssEase: 'linear',
       arrows: false,
      slidesToShow: 2,
      slidesToScroll:1,
      responsive: [
      {
        breakpoint: 1024, // width to change options
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
};

  return (
    <>
      <h1 className='app-text'>Appreciated by:</h1>
      <div className='app-logo'>
      <Slider {...settings}>
        <div>
          <img style = {{width:'200px'}}
          src={logo} />
        </div>
        <div>
          <img style = {{width:'200px'}}
          src='https://globemoving.net/blog/wp-content/uploads/2016/04/start-up.png' />
        </div>
        <div>
          <img style = {{width:'180px',height:'80px'}}
          src='https://upload.wikimedia.org/wikipedia/commons/a/ad/Images_Bazaar_Logo.png' />
        </div>
      </Slider>
      </div>
    </>
  )
}

export default Appriciated
