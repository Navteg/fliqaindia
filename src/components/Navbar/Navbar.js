import React from 'react'
import './Navbar.css'
import {Navbar,Collapse,Button,Nav,Link} from 'react-bootstrap'
// import ".src/bootstrap/js/bootstrap.min.js";


// import AboutPage from './components/AboutUS-Page/AboutPage'


const NavBar = () => {
   return (
     <Navbar bg="#D0E1FA" expand="lg">
        <Navbar.Brand href="#home">
        <img src="https://focused-yonath-473677.netlify.app/logos/logo-png.png" width="190" height="50" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center mr-auto" activeKey="/home">
           <Nav.Item className='nav-item'>
             <Nav.Link style={{left:'-15px',position:'absolute'}} href="/home">HOME</Nav.Link>
           </Nav.Item>
           <Nav.Item className='nav-item'>
             <Nav.Link style={{left:'-45px',position:'absolute',width:'100px'}} href='/home'>ABOUT US</Nav.Link>
           </Nav.Item>
           <Nav.Item className='nav-item'>
             <Nav.Link style={{left:'-50px',position:'absolute'}} href='/home'>SERVICES</Nav.Link>
           </Nav.Item>
           <Nav.Item className='nav-item'>
             <Nav.Link style={{left:'-60px',position:'absolute'}} href='/home'>
               FREELANCER
             </Nav.Link>
           </Nav.Item>
           <Nav.Item className='nav-item'>
             <Nav.Link style={{left:'-42px',position:'absolute'}} href="/home">BLOG</Nav.Link>
           </Nav.Item>
           <Nav.Item className='nav-item'>
             <Nav.Link style={{left:'-75px',position:'absolute',width:'130px'}} href="/home">TOUR & TRAVEL</Nav.Link>
           </Nav.Item>
           <Nav.Item style={{left:'790px',position:'absolute',top:'19px'}} className='nav-item'>
             <Nav.Link href="/home">TUTORIAL</Nav.Link>
           </Nav.Item>
           <Nav.Item className='nav-item'>
             <Nav.Link style={{left:'40px',position:'absolute',width:'100px'}} href="/home">CONTACT US</Nav.Link>
           </Nav.Item>


           <Nav.Item className='nav-item'>
             <Nav.Link style={{left:'80px',position:'absolute',fontSize:'20px'}}
                href="http://www.linkedin.com/company/Fliqaindia">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </Nav.Link>
           </Nav.Item>

           <Nav.Item className='nav-item'>
             <Nav.Link style={{left:'70px',position:'absolute',fontSize:'20px'}}
                href="http://www.youtube.com/Fliqaindia">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </Nav.Link>
         </Nav.Item>

        <Nav.Item className='nav-item'>
          <Nav.Link style={{left:'50px',position:'absolute',fontSize:'20px'}}
            href="http://www.instagram.com/Fliqaindia">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </Nav.Link>
        </Nav.Item>

       <Nav.Item className='nav-item'>
         <Nav.Link style={{left:'30px',position:'absolute',fontSize:'20px'}}
            href="http://www.facebook.com/Fliqaindia">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </Nav.Link>
       </Nav.Item>

       <Nav.Item className='nav-item'>
         <Nav.Link style={{left:'5px',position:'absolute',fontSize:'20px'}}
            href="https://api.whatsapp.com/send?phone=919641817485">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </Nav.Link>
       </Nav.Item>

      </Nav>
        </Navbar.Collapse>
      </Navbar>
     /*<nav className="navbar navbar-expand-lg navbar-light">
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
    </nav>*/

);
}

export default NavBar
