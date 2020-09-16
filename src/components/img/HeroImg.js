import React, { Component } from 'react'
import './HeroImg.css'
import {Button,Carousel} from 'react-bootstrap'
import carousel1 from './Carousel photos/Carousel 1.jpg'
import carousel2 from './Carousel photos/Carousel 2.png'
import carousel3 from './Carousel photos/Carousel 3.jpg'
import Slider from 'react-slick'

const HeroImg = () => {
  var settings={
    fade:!0,
    delay:0.5,
  }
    return (
      <div className="hero-container">
              <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel1}
              alt="First slide"
            />
            <div>
              <p className="content-1">FliqaIndia For</p>
              <p className="content-2">Photography</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel2}
              alt="Third slide"
            />

            <div >
              <p className="content-1">FliqaIndia For</p>
              <p className="content-2">Videography</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Third slide"
            />

            <div>

              <p className="content-1">FliqaIndia For</p>
              <p className="content-2">Graphics</p>

            </div>
          </Carousel.Item>
        </Carousel>

          <form className="form-inline my-2 my-lg-0">
            <input className="search" type=" search" placeholder="                      What are you lookin for e.g Wedding Photograph" aria-label="Search" />
            <button className="search-button" type="submit"><i className="fa fa-search"></i></button>
          </form>

          <p><span className="content-3">Popular :</span></p>

          <div className="btn-grp">
            <button className="btn-1">Logo Design</button>
            <button className="btn-2">Web Design</button>
            <button className="btn-3">Brochure</button>
            <button className="btn-4">Others</button>
          </div>


          </div>



    )
}

export default HeroImg
