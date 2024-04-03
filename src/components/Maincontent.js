import React, { useEffect } from 'react'
import img1 from '../images/htmll.png'
import img2 from '../images/css.png'
import img3 from '../images/js.png'
import img4 from '../images/img4.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Maincontent() {
   useEffect(()=>{
          AOS.init();
   },[])
  return (

    <>
          <div className='content-container' >
                  <div className='about-us' >
                        <h1 data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1000" data-aos-once="true">About Me<hr></hr></h1>
                        
                        <p data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1500" data-aos-once="true"><span>Hello I`m Saravanan.</span> I am first year student. I am pursing my bachelor degree at SKCET. I studied front-end technology in Youtube. My technical skill are good.I create many project in HTML, CSS, Js and ReactJs project like Youtube Clone etc. My project is my github id.</p>          
                        <hr className='hr'></hr>
                  </div>
                
                  <div className='skills overlay ' >
                      <div className='technical-skills'>
                       <h1 data-aos="fade-right" data-aos-delay="10"  data-aos-duration="800"  data-aos-once="true">Technical Skills <hr></hr></h1>
                          <div className='column'>
                                 <div className='column1'  data-aos="fade-right" data-aos-delay="10"  data-aos-duration="800"data-aos-once="true">
                                         <p><img src={img1} alt=''/>HTML</p>
                                         <div className='in in1'>
                                             <div className='out out1' ></div>
                                         </div>
                                         
                                 </div>
                                 <div className='column2'  data-aos="fade-right" data-aos-delay="10"  data-aos-duration="1000" data-aos-once="true">
                                         <p><img src={img2} alt=''/>CSS</p>
                                         <div className='in in2'>
                                             <div className='out out2' ></div>
                                         </div>
                                         
                                 </div>
                                 <div className='column3'  data-aos="fade-right" data-aos-delay="10"  data-aos-duration="1200" data-aos-once="true">
                                         <p><img src={img3} alt=''/>JAVASCRIPT</p>
                                         <div className='in in3'>
                                           <div className='out out3'></div>                                             
                                         </div>
                                 </div>
                                 <div className='column4'  data-aos="fade-right" data-aos-delay="10"  data-aos-duration="1400"  data-aos-once="true">
                                         <p><img src={img4} alt=''/>REACT-JS</p>
                                         <div className='in in4'>
                                            <div className='out out4' ></div>                                                
                                         </div>
                                 </div>
                          </div>

                     </div>


                       <div className='professional'>
                            <h1 data-aos="fade-right" data-aos-delay="10"  data-aos-duration="700" data-aos-once="true">Professional Skills<hr></hr></h1>
                          <div class="circle-container space">
                                     <div class="outer o1" data-aos="fade-up" data-aos-delay="10"  data-aos-duration="800" data-aos-once="true">
                                              <div class="inner i1">
                                                     <h1 id="number">74 <span>%</span></h1>
                                                      <p  style={{ fontSize: "10px" }}>Problem Solving</p>
                                              </div>                                        
                                               <svg >
                                                   <circle cx="65" cy="65" r="55" stroke-linecap="round"></circle>
                                               </svg>
                                      </div>

                                      <div class="outer o2" data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1000" data-aos-once="true">
                                              <div class="inner i2">
                                                     <h1 id="number">80 <span>%</span></h1>
                                                      <p>Photography</p>
                                              </div>                                        
                                               <svg >
                                                   <circle cx="65" cy="65" r="55" stroke-linecap="round"></circle>
                                               </svg>
                                      </div>

                                      <div class="outer o3" data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1200" data-aos-once="true" >
                                              <div class="inner i3">
                                                     <h1 id="number">85 <span>%</span></h1>
                                                      <p>Team Work</p>
                                              </div>                                        
                                               <svg >
                                                   <circle cx="65" cy="65" r="55" stroke-linecap="round" ></circle>
                                               </svg>
                                      </div>

                                      <div class="outer o4" data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1400"  data-aos-once="true">
                                              <div class="inner i4">
                                                     <h1 id="number">93 <span>%</span></h1>
                                                      <p>Creativity</p>
                                              </div>                                        
                                               <svg >
                                                   <circle cx="65" cy="65" r="55" stroke-linecap="round"></circle>
                                               </svg>
                                      </div>
                          </div> 
                     </div>
                 
                  {/* ------------professional skills end---------- */}
               
           </div> 
        </div>
    </>
  )
}

export default Maincontent