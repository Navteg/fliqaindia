import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route,Switch} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.js';
import HeroImg from './components/img/HeroImg'
import Button from './components/HeaderBottom/Button'
import Shoot from './components/Shoot/WeddingShoot'
import Advertice from './components/Advertice/Advertice'
import AboutUs from './components/AboutUs/AboutUs'
import Company from './components/Companies/Company'
import Appriciated from './components/appreciation/Appriciated'
import Service from './components/Services/Service'
import Offer from './components/Offers/Offer'
import Feature from './components/Features/Feature'
import Blog from './components/Blogs/Blog'
import Review from './components/Reviews/Review'
import Footer from './components/Footer/Footer'
import ServicePage from './components/Service-Page/ServicePage'



const App = () => {
  return (
    <div>
    {/*      <Navbar />
      <HeroImg />
      <Button />
      <Shoot />
      <Advertice/>
      <AboutUs />
      <Company />
      <Service />
      <Offer />
      <Feature />
      <Blog />
      <Review />
      <Footer />
*/}
        <Switch />
          <Route exact strict path='/' component={Navbar} />
          <Route exact strict path='/' component={HeroImg} />
          <Route exact strict path='/' component={Button} />
          <Route exact strict path='/' component={Shoot} />
          {/*<Route exact strict path='/' component={Advertice} />*/}
          <Route exact strict path='/' component={AboutUs} />
          <Route exact strict path='/' component={Company} />
          <Route exact strict path='/' component={Appriciated} />
          <Route exact strict path='/' component={Service} />
          <Route exact strict path='/' component={Offer} />
          <Route exact strict path='/' component={Feature} />
          {/*<Route exact strict path='/' component={Blog} />*/}
          <Route exact strict path='/' component={Review} />
          <Route exact strict path='/' component={Footer} />
          <Route exact strict path='/service' component={ServicePage} />
        <Switch />

    </div>
  );
}

export default App;
