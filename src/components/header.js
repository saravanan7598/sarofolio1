import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { GiFiles } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import circlelogo from '../images/logo.jpg'

function Header() {  
  const [menumobile,SetMenumobile]=useState(false)
  const[header,SetHeader]=useState(false)
  const changenavbar = () =>
  {
      if(window.scrollY >=80)
      {
        SetHeader(true)
      }  
      else{
          SetHeader(false)
      }
  }
  var MenuOpen=()=>
  {
    SetMenumobile(!menumobile)
      
  }
  window.addEventListener('scroll',changenavbar)
  return (
    <div>
            <div className={header ? 'container active' :'container'}>
                <div className='mobileheader '> 
                             
                       <ul>
                           <li><Link to='/work'  className='links '>Work</Link><hr className='header-hr'></hr></li>
                           <li><Link to='/about'  className='links' >About</Link> <hr className='header-hr'></hr></li>
                           <Link to='/' className='center-links'><li>PORTFOLIO</li></Link>
                           <Link to='/' className='center-links2'><li><h1><span>P</span><img /><span>ORTFOLIO</span></h1></li></Link>
                           <li><Link to='/contact'  className='links'>Contact</Link><hr className='header-hr'></hr></li>
                           <li className='skills'>Skills<MdKeyboardArrowDown className='arrow-down' />
                               <ul className='sub-menu'>
                                   <li><p><span><GoDotFill /></span><Link to='/professionalskills'  className='links'>Professional Skills</Link></p>
                                  <p><span><GoDotFill /></span><Link to='/technicalskills'  className='links'>Technical Skills</Link></p></li>
                               </ul>
                             </li>
                           
                             <li className='menu' onClick={MenuOpen}> 
                              <IoMenu  className='menu-open' />
                              {/* <RxCross1  className='menu-close'/> */}  
                            </li>
                           
                       </ul>
                           
                         
                 </div>
            </div>
                  <div className={menumobile ? 'mobile-sidebar' : 'mobile-sidebar-open'}>
                                  <h1>PORTFOLIO</h1>
                          <ul>
                              <li><p><AiFillHome /></p><Link to='/'  className='links '>Home</Link></li>
                           <li><p><GiFiles /></p><Link to='/work'  className='links '>Work</Link></li>
                           <li><p><FaUserSecret /></p><Link to='/about'  className='links' >About</Link> </li>
                           <li><p><AiFillContacts /></p><Link to='/contact'  className='links'>Contact</Link></li>
                           <li className='skil'>
                                   <div><GiSkills className='skil-icon'/><span>Skills</span><MdKeyboardArrowDown className='arrow-down' /></div>
                               <ul className='mobile-sub-menu'>
                               <li><span className='mobile-dot'><GoDotFill /></span><Link to='/professionalskills'  className='links'>Professional Skills</Link></li>
                                  <li><span className='mobile-dot'><GoDotFill /></span><Link to='/technicalskills'  className='links'>Technical Skills</Link></li>
                               </ul>
                               </li>
                          <div className='mobile-menu-user'>
                                <span  className='user-icon'><FaRegUserCircle /></span>
                                <p>SARAVANAN</p>
                          </div>
                          </ul>
                 </div>
    </div>
  )
}

export default Header