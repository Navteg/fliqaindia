import React from 'react'
import './Navbar.css'


// import AboutPage from './components/AboutUS-Page/AboutPage'


const Navbar = () => {
   return (

     <div>
     <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand">
        <img src="https://focused-yonath-473677.netlify.app/logos/logo-png.png" width="190" height="50" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/"style={{width:"63px"}}>home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href ="/" style={{width:"97px"}}>about us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/service" style={{width:"90px"}}>services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{width:"110px"}}>freelancer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{width:"60px"}}>blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{width:"120px"}}>tour&travel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"style={{width:"90px"}}>tutorial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"style={{width:"120px"}}>contact us</a>
            </li>
          </ul>

          <ul className="nav-icon">
            <li>
              <a href="http://www.facebook.com/Fliqaindia"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            </li>

            <li className="nav-icon">
            <a href="https://api.whatsapp.com/send?phone=919641817485&fbclid=IwAR2IBYLmfMGTv_6gDUFaljzZeiGb4CGqFZl7CMFm3BL_cG-Qw5U26TnOrak"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
            </li>

            <li className="nav-icon">
              <a href="http://www.linkedin.com/company/Fliqaindia"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </li>

            <li className="nav-icon">
              <a href="http://www.youtube.com/Fliqaindia"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
            </li>

            <li className="nav-icon">
              <a href="http://www.instagram.com/Fliqaindia"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </li>

          </ul>
          </div>
    </nav>
</div>
);
}

export default Navbar
