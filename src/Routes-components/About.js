import React,{useEffect} from 'react'

import { FaArrowUpLong } from "react-icons/fa6";
import Header2 from './Header2';
import Fooder from '../components/fooder';
import resume from '../images/Resume.pdf'
import { MdOutlineDownloading } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css'
function About() {
    
   useEffect(()=>{
    AOS.init();
},[])
  return (
<div>
       <div className='about-container'>
               <div className='headerpage'><Header2/></div>
                   <div className='banner'>
                            <div className='banner-txt og'>
                                 <h1 data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1000"data-aos-once="true">ABOUT</h1>
                                 <p data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1200"data-aos-once="true"> Portfolio  <FaArrowUpLong  className='work-icon'/><span>About</span></p>
                            </div>
                    </div>
                    <div className='middle-about'>
                         <div className='about-txt'>
                             <h1>ABOUT<span> ME</span></h1>
                             <p>I am always eager to learn new technologies and stay up-to-date with the latest trends in frontend development.</p>
                             <hr className='aboutpage-hr'></hr>
                         </div>
                         <div className='about-image' data-aos="fade-right" data-aos-delay="10"  data-aos-duration="1000" data-aos-offset="150" data-aos-once="true">
                             <div>
                                <div className='image2'></div>
                                <div className='image'>
                                </div>
                             </div>
                                <div className='about-image-text' data-aos="fade-left" data-aos-delay="10"  data-aos-duration="1000" data-aos-offset="150" data-aos-once="true">
                                   <h3>Hey there,  I Am <span> Saravanan</span></h3>
                                   <p> I am first year student. I am pursing my bachelor degree at SKCET. I studied front-end technology in Youtube. My technical skill are good.I create many project in HTML, CSS, Js and ReactJs project like Youtube Clone etc. My project is my github id. Develop user-friendly and visually appealing user interfaces (UI) using  React JS.</p>
                                   <table>
                                         <tr>
                                             <td>Name</td> <td><span>:</span>Saravanan</td>
                                         </tr>
                                         <tr>
                                             <td>Age</td> <td><span>:</span>18</td>
                                         </tr>
                                         <tr>
                                             <td>Address</td> <td><span>:</span>Sankarankovil, Tenkasi</td>
                                        
                                         </tr>
                                         <tr>
                                             <td>Phone Number</td> <td><span>:</span>+91 7598238098</td>
                                         </tr>
                                         <tr>
                                             <td>Email</td> <td><span>:</span>saravanansaro759823@gmail.com</td>
                                         </tr>
                                   </table>
                                   <div>
                                    <a href={resume}><button>Resume</button></a>
                                    <a href={resume} download={resume}><MdOutlineDownloading  className='about-down-icon'/></a>
                                    </div>
                                </div>
                         </div>
                    </div>

               <div className='fooder-page-about'><Fooder /></div>
        </div>
</div>
  )
}

export default About