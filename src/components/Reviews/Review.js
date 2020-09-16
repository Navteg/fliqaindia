import React, { Component } from 'react'
import './Review.css'
import Slider from 'react-slick'

const Review = () => {
  var settings = {
      autoplay:true,
      dots: false,
      cssEase:'easeInOut',
      infinite: true,
      speed: 2000,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll:1,
      responsive: [
      {
        breakpoint: 1024, // width to change options
        settings: {
          slidesToShow: 1,
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
          initialSlide: 1,
          speed:5000
        }
      }
    ]
    };

return (
<div className='container-review'>

<p className='heading-review' >Testimonials</p>
<p className='subheading-review' >what people are talking about</p>

<Slider  className='person-1' {...settings} >

  <div>
    <img id='img' style={{borderRadius: '71px',height:'100px',width:'100px',left:'55px !important'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      Wow!!we love love love the images you captured for our weading!!
      Thank you so much- they are so special to us  <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'100px !important',textAlign:'center',position:'realative'}}>
      Harshit</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'80px',textAlign:'center',top:'220px',position:'absolute'}}>
      WedMeGood</p>
  </div>
  <div>
    <img id='img' style={{borderRadius: '71px',height:'100px !important',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      Found your work perfect.Photos are really lovely and editing skills are jaw dropping.I must say couple was very happy <a href="/">read more</a></p>
    <p style={{fontSize:'18px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Samiksha</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      WedMeGood</p>
  </div>
  <div>
    <img id='img' style={{borderRadius: '71px',height:'100px !important',width:'100px',justifyContent:'center'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      Your photography is very good and excellent.It is very creative.keep rocking.The clicks are really amazing.</p>
    <p style={{fontSize:'17px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Jayashree</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      WedMeGood</p>
  </div>
  <div>
    <img id='img' style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      Superb platform.Nice customer handeling orgenisation.very fame network.Gorgeous samples are been displayed <a href="/">read more</a> </p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Senthil</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      WedMeGood</p>
  </div>
  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px',width:'100px',justifyContent:'center'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      Massive THANK YOU SO MUCH for being part of our wedding day yesterday! It was a pleasure to have you as our photographer <a href="/">read more </a></p>
    <p style={{fontSize:'16px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Sowndarya</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      WedMeGood</p>
  </div>
  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px',justifyContent:'center',width:'100'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      Excellent shot!! each and every rituals will give you a real time feeling.Beautiful creative photography and <a href="/">read more </a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Karthikeyan.</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'10px',textAlign:'center'}}>
      WedMeGood</p>
  </div>
</Slider>

<Slider  className='person-2' {...settings} >

  <div>
    <img  id="img" style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px'}}>
      Really i got excited with amazing photograph of these guys they are best at weading photoshot and wonderful graphics <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'30px',textAlign:'center'}}>
      Varun</p>
    <p id='company' style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'70px',color: '#333333'}}>
      Great corporate photos and talented photographer fliqaindia is very effecient and bring out the best.</p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Salman</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'70px',color: '#333333'}}>
       Great job,I will definitely ordering again,I would personally thank you for your outstanding product.</p>
    <p style={{fontSize:'16px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'30px',textAlign:'center'}}>
      Raj Kumar</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      Superb responsive,quality work,wholesome professionals.you people are best at what you all do.one of the best <a href="/">read more</a></p>
    <p style={{fontSize:'17px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Alexander</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'70px',color: '#333333'}}>
      Needles to say we are extremely satisfied with the results.This is simply unbelivable.Thank You.</p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Kajal</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px',justifyContent:'center',width:'100'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333',top:'120px'}}>
      Massive photos by the this photographer really loved each and every photos taken with full of love <a href="/">read more </a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center',top:'45px !important'}}>
      Snehith</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'realative',top:'220px'}}>
      Facebook</p>
  </div>
</Slider>
<Slider  className='person-3' {...settings} >

  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      Wow!!we love the images you captured for our wedding!!Thank you so much they are soo special to us <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Vikash</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Google</p>
  </div>

  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      It was a wonderful experience with a great photographer.There way of caring customer is very good and caring <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Godwin</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Google</p>
  </div>

  <div>
    <img id="img" style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
       photography is a way of feeling,of touching,of loving.what you caught on film is captured forever...It remains <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Rashmi</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Google</p>
  </div>
  <div>
    <img id='img' style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      wonderful experience and great photographer.absolutely love there service and there picture were perfect <a href="/">read more</a> </p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Rahul</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Google</p>
  </div>
  <div>
    <img id='img' style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'100px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'240.09px',height:'80px',color: '#333333'}}>
      Classic photographer is amazing.I choose the photographer based on readily-available portfolio,and i was't disappointed <a href="/">read more </a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'40px',textAlign:'center'}}>
      Ajay</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center'}}>
      Google</p>
  </div>
  <div>
    <img id='img' style={{borderRadius: '71px',height:'100px',width:'100px',justifyContent:'center'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'15px',fontFamily:'Arial',width:'220.09px',height:'70px',color: '#333333'}}>
      Classic photographer is amazing.I choose photographer based on readily-available <a href="/">read more </a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'700',width:'165.09px',height:'30px',textAlign:'center'}}>
      Ajay</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'realative',top:'220px'}}>
      Google</p>
  </div>
</Slider>
</div>


    )
}

export default Review
