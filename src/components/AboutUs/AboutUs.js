import React, { Component } from 'react'
import './AboutUs.css'

const AboutUs = () => {
  // render() {
    return (
      <div className="container-5">
		<img className="img-fluid" src="https://focused-yonath-473677.netlify.app/svg/about.svg" alt="header image" />
		<div className="img-title">
			<h2 className="about-heading">About Us</h2>
			<p className="paragraph">
				At Fliqaindia it is our squad, creativity and enthusiasm which we believe is at our competitive
				edge. Our staff is committed to giving you a quality of which you are sincerely worthy. We will
				have a tailored Photography services as effective and hospitable as possible, extremely
				adaptable and accessible to your needs. We also seek and take on innovative new ventures and
				collaborate along side
				<span className="hideDesktop"><a href="/"> read more</a></span>
          <span className="hidePhone">
					you to crack the mould and push the norms beyond your expectations.
					Whether it is wedding photography, pre wedding photography, portfolio Photoshoot, aerial
					drone photography, or graphic design service, Fliqaindia is always at your services.
          <br />
          <br />
					For your promotions, advertising and many more purposes, Fliqaindia offers graphics services.
					Our graphic designers strive to construct a concept in a quick look, use text, icons, pictures,
					colors, logos etc. to generate visual effects. Fliqaindia offers unparalleled UI and UX design
					services to improve the website design interface and include interactive mobile apps. We
					provide a one-stop solution such as Logo Design, Business card, Posters, banners, brochure, and
					many more.
          <br />
          <br />
					For professional photography services, Fliqaindia is an insight-orientated partner and marketing
					concierge that bring our members together with leading art consumers, creative directors,
					photo publishers and representatives, in a fresh and innovative approach. Our trip started 5
					years ago and now Startup India, Startup Bengal, and Imagesbazaar have sent us this
					recognition to make you realize what we are doing. Our company now ranges across India and
					it's because of our delighted clients who have held confidence in us and rendered each striking
					moment special. We are also trusted by Justdial, WedMEGood, Shaadisaga, weddingwire and so
					many well known event organizers.
				</span>
			</p>
		</div>
	</div>

    )
  // }
}

export default AboutUs
