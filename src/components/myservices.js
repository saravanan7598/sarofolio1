import React, { useEffect } from 'react'
import webdesign from '../images/webdesign1.gif'
// import emoj1 from '../images/emoj1.png'
// import emoj2 from '../images/emoj3.png'
import emojgif1 from '../images/emojgif1.gif'
import emojgif2 from '../images/emojgif2.gif'
import web from '../images/web1.gif'
import hack from '../images/hacking1.gif'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Myservices() {
    useEffect(()=>{
        AOS.init();
 },[])
  return (
    <div>
  
        <div className='services'>
               <h1 data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1000"  data-aos-once="true">My S<span style={{color:"black"}}>ervices</span></h1> 
               <div className='emoj'>
                     <img src={emojgif1} alt='' className='emoj1'></img>
                     <img src={emojgif2} alt='' className='emoj2'></img>
                </div>
               <div className='service-card' >
                 <hr  data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1500"  data-aos-once="true"></hr>
              
                {/* -----service-card-1 */}
                  <div className='service-card1' data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1500"  data-aos-once="true">
                       <div className='card-design'>  
                            <div className='design2'style={{backgroundColor:"lightgreen"}}  ></div>
                               <img src={web}alt='' ></img>
                            <div className='text'>
                                <h3>Web <span>Development</span></h3>
                                <p>Bring your ideas to life with our custom web development solutions tailored to your specific business needs. Boost your online sales with our feature-rich e-commerce platform development services.</p>
                           </div>

                      </div>
                  </div>

                   {/* -----service-card-2 */}
                   <div className='service-card2' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1700"  data-aos-once="true">
                       <div className='card-design'>  
                            <div className='design2'style={{backgroundColor:"lightblue"}} ></div>
     
                               <img src={webdesign}alt='' style={{borderBottom:" 5px solid skyblue"}} ></img>
                            <div className='text'>
                                <h3>Web <span >Design</span></h3>
                                <p>Our team of experienced designers will work closely with you to understand your unique needs and craft a website that perfectly reflects your brand identity. We ensure your website looks great and functions flawlessly across all devices</p>
                           </div>

                      </div>
                  </div>
                    
                   {/* -----service-card-3 */}
                   <div className='service-card3' data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1900"  data-aos-once="true">
                       <div className='card-design'>  
                            <div className='design2'  style={{backgroundColor:"lightpink"}}></div>
                               <img src={hack}alt=''  style={{borderBottom:" 5px solid pink"}} ></img>
                            <div className='text'>
                                <h3>Edi<span >ting</span></h3>
                                <p>Polished writing makes a strong first impression and ensures your message is delivered effectively.  Editors can identify and fix issues quickly, allowing you to focus on other aspects of your project.</p>
                           </div>

                      </div>
                  </div>      
              </div>
        </div>
         
    </div>
  )
}

export default Myservices