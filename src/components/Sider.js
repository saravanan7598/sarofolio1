import React, { useRef } from 'react'
import data from './Sidedata'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import right from "../images/arrowright.png"
import left from "../images/arrowleft.png"

function Sider() {

  const sliderRef=useRef()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  const sliderRight=()=>
  {
    sliderRef.current.slickNext();
  };
  const sliderLeft=()=>
  {
    sliderRef.current.slickPrev();
  };
  return (
    <div>
           <div className='card-container'>
                     <h1 data-aos="fade-right" data-aos-delay="10"  data-aos-duration="1000"  data-aos-once="true"><hr className='hr1'></hr>SOME OF MY LATEST <span style={{color:"black"}} >PROJECT</span><hr className='hr2' data-aos="fade-right" data-aos-delay="10"  data-aos-duration="1200"  data-aos-once="true"></hr></h1>

                 <div className='card'>
                         <div className='arrow-right' data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1400"  data-aos-once="true">
                            <img src={right} alt='' onClick={sliderRight}></img>
                         </div>
                         <div className='arrow-left' data-aos="fade-up" data-aos-delay="10"  data-aos-duration="500"  data-aos-once="true">
                            <img src={left} alt='' onClick={sliderLeft}></img>
                         </div>
                 <Slider ref={sliderRef} {...settings}>
                      {data.map((list)=>
                      {
                        return (
                                  <>  
                                      <div>
                                       <div className='overall' key={list.id}  data-aos="fade-up" data-aos-delay="10"  data-aos-duration="500 "  data-aos-once="true">
                                              
                                                 <div >
                                                      <img src={list.img} alt='' ></img>
                                                      <p>{list.name}</p>
                                                      <p className='category' style={{fontSize:"9px", marginBottom:"10px",fontFamily:"monospace",paddingTop:"10px",paddingBottom:"5px" ,color:"GrayText"} }>{list.category}</p>
                                                 </div>
                                                
                                       </div>
                                       </div>
                                  </>
                        )
                      })}  
                      </Slider> 
                 </div>
           </div>

    
    </div>
  )
}

export default Sider