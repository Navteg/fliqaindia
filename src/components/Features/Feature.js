import React, { Component } from 'react'
import './Feature.css'

const Feature = () => {
    return (
      <div className='container-feature'>
        <p className='feature-heading'>Our Key Features</p>
          
        <div>
          {/*<img className='best-qlty-img' src="https://image.shutterstock.com/mosaic_250/227267087/1497939242/stock-vector-vector-illustration-business-finance-ecommerce-admin-and-customer-service-serving-calling-from-1497939242.jpg" />*/}
          <h2 className='best-qlty'>Best Quality</h2>
          <img className="feature-img-1" src="https://focused-yonath-473677.netlify.app/okf/best-quality.svg" />
          <p className='feature-para-1'>The best way to ensure sustainability for Fliqaindia is to deliver
            the highest standard of its goods and services. Price over quantity is our priority </p>

            <h2 className='cust-satis'>Customer Satisfaction</h2>
             <img className="cust-img" src="https://focused-yonath-473677.netlify.app/okf/haselfree-delivery.svg" />
            <p className='feature-para-2'> Loyalty contributes to continuing fulfillment. Fliqaindia therefore
            considers customer satisfaction to be its top priority. What we do highlight more than what we speak.</p>
        </div>

        <div className='seprator'></div>

        <h2 className='secure-pymnt'>Secure Payment</h2>
        <img className="secure-img" src="https://focused-yonath-473677.netlify.app/okf/secure-payment.svg" />
        <p className='feature-para-3'>Using a skilled firm by your side will save the expense of hiring a custom
         photographer per case and client demand. At Fliqaindia, we work according to your priorities and restrictions.</p>

          <h2 className='hassle-free'>Hassle Free Delivery</h2>
          <img className="feature-img-2" src="https://focused-yonath-473677.netlify.app/okf/customer-satisfaction.svg"  />
          <p className='feature-para-4'> We are now eligible for instant delivery. Fortunately, Fliqaindia typically
          takes on the complexities of the design cycle more than gladly, because we know what our customers want.</p>

      </div>
    )
}

export default Feature
