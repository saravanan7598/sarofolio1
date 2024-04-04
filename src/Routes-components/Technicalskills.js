import React,{useEffect} from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import Header2 from './Header2';
import Fooder from '../components/fooder';
import html from '../images/htmll.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/img4.png'
import c from '../images/c++.png'
import canva from '../images/canva.png'
import AOS from 'aos'
import 'aos/dist/aos.css'





function Technicalskills() {
     useEffect(()=>{
          AOS.init();
      },[])
  return (
<div>
 <div className='technical-container'>
    <div className='headerpage'><Header2/></div>
         <div className='banner'>
                <div className='banner-txt og'>
                     <h1 data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1000"data-aos-once="true">Technical<span className='skills-span'>Skills</span></h1>
                     <p data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1200"data-aos-once="true">Portfolio  <FaArrowUpLong  className='work-icon'/><span>Skills <FaArrowUpLong  className='work-icon'/></span><span>TechnicalSkills</span></p>
                </div>
         </div>
         <div className='tech-container'>
            <div className='tech tech-4' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000"data-aos-once="true">
                 
                 <img src={react} alt=''></img>
                 <h5>REACT - JS</h5>
                 <p>Leveled up my web dev skills! React learning completed. Now I'm ready to build some projects and expand my skills.</p>
                 <a href='#'>Read More</a>
            </div>
            <div className='tech tech-2' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000"data-aos-once="true">
                 <img src={css} alt=''></img>
                 <h5>CSS</h5>
                 <p>Finished a comprehensive CSS learning program, covering selectors, properties, and layout.</p>
                 <a href='#'>Read More</a>
            </div>
            <div className='tech tech-3' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000"data-aos-once="true">
                 <img src={js} alt=''></img>
                 <h5>JAVASCRIPT</h5>
                 <p>I've been diligently working on learning JavaScript, and I'm excited to announce that I've completed the JavaScript.</p>
                 <a href='#'>Read More</a>
            </div>
            <div className='tech tech-1' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000"data-aos-once="true">
            <img src={html} alt=''></img>
                 <h5>HTML</h5>
                 <p>I've successfully completed the HTML learning process. I'm now ready to start building  web pages.</p>
                 <a href='#'>Read More</a>
            </div>
            <div className='tech tech-5' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000"data-aos-once="true">
                 <img src={c} alt=''></img>
                 <h5>C++</h5>
                 <p>Finished C++ fundamentals, on to new challenges. C++ base built, ready for further exploration!</p>
                 <a href='#'>Read More</a>
            </div>
            <div className='tech tech-6' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000"data-aos-once="true">
                 <img src={canva} alt=''></img>
                 <h5>Web Design</h5>
                 <p>I've finished learning the fundamentals of web design! Now I'm excited to put my new skills to the some websites.</p>
                 <a href='#'>Read More</a>
            </div>

         </div>
         <div className='fooder-page-tech'><Fooder /></div>

  </div>
</div>
  )
}

export default Technicalskills