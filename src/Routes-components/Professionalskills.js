import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import Header2 from './Header2';
import Fooder from '../components/fooder';
function Professionalskills() {
  return (
<div>
 <div className='professional-container'>
    <div className='headerpage'><Header2/></div>
         <div className='banner'>
                <div className='banner-txt og'>
                     <h1>Professional<span className='skills-span'>Skills</span></h1>
                     <p>Portfolio  <FaArrowUpLong  className='work-icon'/><span>Skills <FaArrowUpLong  className='work-icon'/></span><span>ProfessionalSkills</span></p>
                </div>
         </div>
         <div className='fooder-page'><Fooder /></div>

  </div>
</div>
  )
}

export default Professionalskills