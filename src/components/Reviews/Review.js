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
    <img style={{borderRadius: '71px',height:'100px !important',width:'80px',justifyContent:'center !important',position:'absolute'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'90px',color: '#333333',position:'absolute',top:'120px'}}>
      Wow!!we love love love the images you captured for <br />
      our  weading!! <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',
        position:'absolute',top:'45px'}}>
      Harshit</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',top:'220px',position:'absolute'}}>
      WedMeGood</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',width:'80px',position:'absolute'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      Found your work perfect.Photos are really lovely and <a href="/">read more</a></p>
    <p style={{fontSize:'18px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Samiksha</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      WedMeGood</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',width:'80px',justifyContent:'center',position:'absolute'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'120px',color: '#333333',position:'absolute',top:'120px'}}>
      Your photography is very good and excellent.It is very creative <a href="/">read more</a> </p>
    <p style={{fontSize:'17px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Jayashree</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      WedMeGood</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',position:'absolute',width:'80px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'120px',color: '#333333',position:'absolute',top:'120px'}}>
      Superb platform.Nice customer handeling orgenisation <a href="/">read more</a> </p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Senthil</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      WedMeGood</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',width:'80px',justifyContent:'center',position:'absolute'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      Massive THANK YOU SO MUCH for being part of our wedding day <a href="/">read more </a></p>
    <p style={{fontSize:'16px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Sowndarya</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      WedMeGood</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px',justifyContent:'center'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'70px',color: '#333333'}}>
      Excellent shot!! each and every rituals will give you a real time <a href="/">read more </a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'center'}}>
      Karthikeyan.</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'10px',textAlign:'center'}}>
      WedMeGood</p>
  </div>
</Slider>

<Slider  className='person-2' {...settings} >

  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'80px',position:'absolute'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      Really i got excited with amazing photograph of these guys, <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Varun</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',position:'absolute',width:'80px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      Great corporate photos and talented photographer fliqaindia is <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Salman</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',position:'absolute',width:'80px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
       Great job,I will definitely ordering again,I would personally <a href="/">read more</a></p>
    <p style={{fontSize:'16px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Raj Kumar</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',position:'absolute',width:'80px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      Superb responsive,quality work,wholesome professionals <a href="/">read more</a> </p>
    <p style={{fontSize:'17px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Alexander.</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',position:'absolute',width:'80px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      Needles to say we are extremely satisfied with the results <a href="/">read more </a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Kajal</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Facebook</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px',justifyContent:'center'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'70px',color: '#333333',top:'120px'}}>
      Massive photos by the this photographer really loved each and <a href="/">read more </a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'center',top:'45px !important'}}>
      Snehith</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'realative',top:'220px'}}>
      Facebook</p>
  </div>
</Slider>
<Slider  className='person-3' {...settings} >

  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',width:'80px',position:'absolute'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      Wow!!we love the images you captured for our wedding <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Vikash</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Google</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',position:'absolute',width:'80px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      It was a wonderful experience with a great photographer <a href="/">read more</a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Godwin</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Google</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',position:'absolute',width:'80px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
       photography is a way of feeling,of touching,of loving.what you  <a href="/">read more</a></p>
    <p style={{fontSize:'16px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Rashmi</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Google</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',position:'absolute',width:'80px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      wonderful experience and great photographer <a href="/">read more</a> </p>
    <p style={{fontSize:'17px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Rahul</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Google</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px !important',justifyContent:'center',position:'absolute',width:'80px'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'100px',color: '#333333',position:'absolute',top:'120px'}}>
      Classic photographer is amazing.I choose the photographer <a href="/">read more </a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'right',position:'absolute',top:'45px'}}>
      Ajay</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'absolute',top:'220px'}}>
      Google</p>
  </div>
  <div>
    <img style={{borderRadius: '71px',height:'100px',justifyContent:'center'}}
    src='https://www.europeanleadershipnetwork.org/wp-content/uploads/2019/03/Alcaro-Mr-Riccardo-Alcaro_gallerylarge-e1552649214106-146x150.jpg' />
    <p style={{fontSize:'18px',fontFamily:'Arial',width:'220.09px',height:'70px',color: '#333333',top:'120px'}}>
      Classic photographer is amazing.I choose<a href="/">read more </a></p>
    <p style={{fontSize:'19px',fontFamily:'Arial',fontWeight:'600',width:'165.09px',height:'30px',textAlign:'center',top:'45px !important'}}>
      Ajay</p>
    <p style={{fontSize:'28px',fontFamily:'Arial',width:'145.09px',fontWeight:'700',height:'20px',textAlign:'center',position:'realative',top:'220px'}}>
      Google</p>
  </div>
</Slider>
</div>


    )
}

export default Review
