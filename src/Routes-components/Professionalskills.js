import React,{useEffect} from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import Header2 from './Header2';
import Fooder from '../components/fooder';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Professionalskills() {
  useEffect(()=>{
    AOS.init();
},[])
  return (
<div>
 <div className='professional-container'>
    <div className='headerpage'><Header2/></div>
         <div className='banner'>
                <div className='banner-txt og'>
                     <h1 data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1000"data-aos-once="true">Professional<span className='skills-span'>Skills</span></h1>
                     <p data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1200"data-aos-once="true">Portfolio  <FaArrowUpLong  className='work-icon'/><span>Skills <FaArrowUpLong  className='work-icon'/></span><span>ProfessionalSkills</span></p>
                </div>
             
         </div>
            <div className='professional-box'>
                         <div className='box boxx1'    data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000" data-aos-once="true">
                               <div className='box1'>
                            <div className='box-bg'>
                              <h1>Crea<span>tivity</span></h1>
                            </div>
                            </div>
                         </div>
                         
                         <div className='box boxx2' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1300" data-aos-once="true">
                           <div  className='box2'>
                                <div className='box-bg'>
                                  <h1>Photo<span>graphy</span></h1>
                                </div>
                            </div>
                         </div>

                         <div className='box boxx3' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1500" data-aos-once="true">
                         <div className='box3'>
                            <div className='box-bg'>
                              <h1>Problem<span>solving</span></h1>
                            </div>
                         </div>
                         </div>

                         <div className='box boxx4' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1700" data-aos-once="true">
                            <div className='box4'>
                            <div className='box-bg'>
                              <h1>Edit<span>ing</span></h1>
                            </div>
                            </div>
                         </div>
                      

                </div> 
         <div><Fooder /></div>

  </div>
</div>
  )
}

export default Professionalskills