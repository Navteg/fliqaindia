import React, { Component } from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <div className="footer">

        <p className="subscribe-heading">Never Miss a thing.</p>
        <input className="subscribe-input" placeholder="  Email Address" />
        <button className="subscribe-button">Sign Up</button>
        <p className="para-1">Be in touch</p>

    {/*    <div className="icon-facebook">
            <a href="#">
              <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
            </a>
         </div>*/}
         <ul className="footer-icon">
            <li>
              <a href="http://www.facebook.com/Fliqaindia"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
            </li>

            <li>
            <a href="https://api.whatsapp.com/send?phone=919641817485"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="http://www.linkedin.com/company/Fliqaindia"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="http://www.youtube.com/Fliqaindia"><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="http://www.instagram.com/Fliqaindia"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
            </li>
          </ul>


         <p className="footer-links">Usefull Links</p>
            <a href='/' className="link-1">Services</a>
            <a href='/' className="link-2">Blog</a>
            <a href='/' className="link-3">Tutorial</a>

            <a href='/' className="link-4">Find your Photographer</a>
            <a href='/' className="link-5">Apply as a Freelancer</a>
            <a href='/' className="link-6">Sign Up</a>

          <p className='footer-support'>Support</p>
            <a href='/' className="support-1">Contact Us</a>
            <a href='/' className="support-2">Feedback</a>
            <a href='/' className="support-3">FAQ</a>

            <a href='/' className="support-4">Terms and Condition</a>
            <a href='/' className="support-5">Privacy Policy</a>

            <p className="copyright">COPYRIGHT © 2019 FLIQAINDIA PVT. LTD.</p>
              <p className="rights" > - &nbsp; ALL RIGHT RESERVED.</p>
              <p className="powered" >POWERED BY FLIQAINDIA PVT. LTD.</p>
              <p className="version" >VERSION 5.0.0</p>

      </div>
    )
}

export default Footer
