import React from 'react';
import './ServicePage.css'

const ServicePage = () => {
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light">

       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
         <a className="navbar-brand" href="/"><span className="hero-heading">FliqaIndia</span></a>
           <li className="nav-item">
             <a className="nav-link" href="/"style={{width:"63px"}}>home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href ="#" style={{width:"97px"}}>about us</a>
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
     </div>

         <ul className="nav-icon">
           <li>
             <a href="#"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
           </li>

           <li className="nav-icon">
           <a href="#"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a>
           </li>
           <li className="nav-icon">
             <a href="#"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
           </li>
           <li className="nav-icon">
             <a href="#"><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>
           </li>
           <li className="nav-icon">
             <a href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
           </li>
         </ul>
   </nav>

   <section>
  <div className="container">
    <div id="services-header" className="owl-carousel owl-theme">
      <div className="item">
        <img src={'/images/services/service1.png'} className="card-img-top" alt="..." />
      </div>
      <div className="item">
        <img src={'images/services/service-video.png'} className="card-img-top" alt="..." />
      </div>
      <div className="item">
        <img src={'images/services/service GD.png'} className="card-img-top" alt="..." />
      </div>
    </div>
  </div>
</section>

<h2 className="text-center my-4 header">
    Photography Services
  </h2>

  <div className="card">
    <div className="row no-gutters">
      <div className="col-md-6">
        <img src="images/services/Pre-wedding2.jpg" className="card-img" alt="..." />
      </div>
      <div className="col-md-6">
        <div className="card-body my-4 photography-services-card-content">
          <h5 className="card-title photography-services-content-heading">Wedding Photoshoot </h5>
          <p className="card-text">
            In addition to get the photos of the most important marriage events, we place the focus on
            imagination to portray them. At Fliqaindia we are always in the quest for reflections, interesting
            foregrounds and backgrounds. Our innovative mix of lighting techniques and our imaginative
            post processing enables us to create amazing and imaginative creativity.
          </p>
          <section className="booknow">
            <div className="text-center">
              <a href="./photography-services/wedding-photoshoot.html" className="btn btn-lg rounded-pill shadow btn-res">
                Get Started
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="row no-gutters flex-column-reverse flex-md-row">
      <div className="col-md-6">
        <div className="card-body my-4 photography-services-card-content">
          <h5 className="card-title photography-services-content-heading">Pre-Wedding Photoshoot</h5>
          <p className="card-text">
            Let's grab the first recollections of your lovely new trip. If they are expressions of candid joy or
            casual looks, the photos act as prized souvenirs. This album will be a conversation source that
            you can encounter again many times over the next several decades.
          </p>
          <section className="booknow">
            <div className="text-center">
              <a href="./photography-services/pre-wedding-photography.html"
                className="btn btn-lg rounded-pill shadow btn-res">
                Get Started
              </a>
            </div>
          </section>
        </div>
      </div>
      <div className="col-md-6">
        <img src="/images/services/Pre-wedding-photoshoot.jpg" className="card-img" alt="..." />
      </div>
    </div>
  </div>

  <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-6" >
        <img src="/images/services/portfolio-photoshoot.jpg" className="card-img" alt="..." />
      </div>
      <div className="col-md-6">
        <div className="card-body my-4 photography-services-card-content">
          <h5 className="card-title photography-services-content-heading">Portrait Photoshoot</h5>
          <p className="card-text">
            Fliqaindia provides a broad variety of Portrait Photography Services to reach a better role in the
            market. The service offered is delivered in compliance with the latest technologies and the
            established requirements. Our photography services have been approved by honorable
            customers and all thanks to its hassle-free operation.
          </p>
          <section className="booknow">
            <div className="text-center">
              <a href="/services/photography-services/portfolio-photoshoot.html"
                className="btn btn-lg rounded-pill shadow btn-res">
                Get Started
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="row no-gutters flex-column-reverse flex-md-row">
      <div className="col-md-6">
        <div className="card-body my-4 photography-services-card-content">
          <h5 className="card-title photography-services-content-heading">Drone</h5>
          <p className="card-text">
            Get first-class aerial imagery, images, maps and data from one of our aerial drone photography
            services. Fliqaindia's capacity is sufficiently broad to enable quick delivery times. Our network's
            experienced drone operators are well-proven and ready to take on whatever mission you are
            forwarding to us.
          </p>
          <section className="booknow">
            <div className="text-center">
              <a href="./photography-services/pre-wedding-photography.html"
                className="btn btn-lg rounded-pill shadow btn-res">
                Get Started
              </a>
            </div>
          </section>
        </div>
      </div>
      <div className="col-md-6">
        <img src="/images/services/Pre-wedding-photoshoot.jpg" className="card-img" alt="..." />
      </div>
    </div>
  </div>

  <section className="booknow my-4">
    <div className="text-center">
      <a className="btn btn-lg rounded-pill shadow btn-res" href="/services/photography-services.html"> Explore More </a>
    </div>
  </section>



</div>

  );
};

export default ServicePage;
