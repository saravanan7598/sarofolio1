import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import Header2 from './Header2';
import Fooder from '../components/fooder';
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
function Contact() {

 const [file,setFile]= useState(["No File Selected"]);
  return (
<div>
       <div className='contact-container'>
               <div className='headerpage'><Header2/></div>
                   <div className='banner'>
                            <div className='banner-txt og'>
                                 <h1>CONTACT</h1>
                                 <p>Portfolio  <FaArrowUpLong  className='work-icon'/><span>Contact</span></p>
                            </div>
                    </div>

                <div className="contact-middle">
                    <div className='middle-container'>
                             <div className='social-middle'>
                                 <div className='social-middle-icons' title='iam_saravanan18'> <a href='https://www.instagram.com/iam_saravanan18/'><LuInstagram  /></a></div>
                                 <div className='social-middle-icons' title='www.linkedin.com/in/saravanan759823'><a href='www.linkedin.com/in/saravanan759823'><FaLinkedinIn /></a></div>
                                 <div className='social-middle-icons' title='https://github.com/Saravanan759823'><a href='https://github.com/Saravanan759823'><TbBrandGithubFilled /></a></div>
                                 <div className='social-middle-icons' title='+91 7598238098'><a href='tel:+917598238098'><IoCall /></a></div>
                                 <div className='social-middle-icons' title='+91 7598238098'><a href='https://wa.me/917598238098?text=Hello Saravanan!'><FaWhatsapp  /> </a>  </div> 
                             </div>
                             <div className='contact-middle'>
                                   <h1>Contact</h1>
                                   <input type='text' placeholder='Name'></input>
                                   <input type='text' placeholder='Email'></input>
                                   <textarea placeholder='Message'></textarea>
                                   <div className='drop-file'>
                                      <div>
                                         <LuUpload className='upload-icons'/>
                                         <h2>Click to Upload</h2>
                                         <p>{file}</p>
                                      <input type='file' onChange={(e)=>{setFile(e.target.files[0].name)}}on></input>
                                      </div>
                                   </div>
                                   <button>Send Message</button>   
                             </div>
                             <div className='map-middle'>
                                    <div>
                                     <iframe id="iframe1" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.3359378913633!2d77.53937849839474!3d9.184041400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0697221f978b2f%3A0xacc97e9039b2a320!2sSANKARANKOVIL!5e0!3m2!1sen!2sin!4v1709656080301!5m2!1sen!2sin" 
                                      allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                                     </div>
                             </div>
                    </div>
                </div>
               <div className='fooder-page-contact'><Fooder /></div>
        </div>
</div>
  )
}

export default Contact