import React, { useState ,useEffect} from 'react'
import  { useRef } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import Header2 from './Header2';
import Fooder from '../components/fooder';
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import emailjs from '@emailjs/browser';
import AOS from 'aos'
import 'aos/dist/aos.css'
function Contact() {

 const [file,setFile]= useState(["No File Selected"]);
 const form = useRef();
 const [send,setSend]=useState({name:"",email:"",message:""});
 const sendEmail = (e) => {
   e.preventDefault();
   setSend({name:"",email:"",message:""});
  
   emailjs
     .sendForm('service_b7xsj7g', 'template_tkuc26d', form.current, {
       publicKey: 'PTMd9Ly0e3sbjOTKT',
     })
     .then(
       () => {
         alert('Successfully Send the Message 👍!');
       },
       (error) => {
        alert('FAILED...', error.text);
       },
     );
 };

 useEffect(()=>{
  AOS.init();
},[])

  return (
<div>
       <div className='contact-container'>
               <div className='headerpage'><Header2/></div>
                   <div className='banner'>
                            <div className='banner-txt og'>
                                 <h1 data-aos="fade-up" data-aos-delay="10"  data-aos-duration="1000"data-aos-once="true">CONTACT</h1>
                                 <p data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1200"data-aos-once="true">Portfolio  <FaArrowUpLong  className='work-icon'/><span>Contact</span></p>
                            </div>
                    </div>

                <div className="contact-middle">
                    <div className='middle-container'>
                             <div className='social-middle'>
                                 <div className='social-middle-icons' title='iam_saravanan18' data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000"data-aos-once="true"> <a href='https://www.instagram.com/iam_saravanan18/'><LuInstagram  /></a></div>
                                 <div className='social-middle-icons' title='www.linkedin.com/in/saravanan759823' data-aos="fade-up" data-aos-delay="120"  data-aos-duration="1200"data-aos-once="true"><a href='www.linkedin.com/in/saravanan759823'><FaLinkedinIn /></a></div>
                                 <div className='social-middle-icons' title='https://github.com/Saravanan759823' data-aos="fade-up" data-aos-delay="140"  data-aos-duration="1400"data-aos-once="true"><a href='https://github.com/Saravanan759823'><TbBrandGithubFilled /></a></div>
                                 <div className='social-middle-icons' title='+91 7598238098' data-aos="fade-up" data-aos-delay="180"  data-aos-duration="1600" data-aos-once="true"><a href='tel:+917598238098'><IoCall /></a></div>
                                 <div className='social-middle-icons' title='+91 7598238098' data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1800" data-aos-once="true"><a href='https://wa.me/917598238098?text=Hello Saravanan!'><FaWhatsapp  /> </a>  </div> 
                             </div>
                        <div>
                                <form ref={form} onSubmit={sendEmail}>

                             <div className='contact-middle'>
          
                                   <h1>Contact</h1>
                                   <input type='text' placeholder='Name'  name="first_name" required  value={send.name} onChange={(e)=>{setSend({name:e.target.value})}}></input>
                                   <input type='text' placeholder='Email'  name="from_email" required  value={send.email} onChange={(e)=>{setSend({email:e.target.value})}}></input>
                                   <textarea placeholder='Message' name='message' required  value={send.message} onChange={(e)=>{setSend({message:e.target.value})}}></textarea>
                                   <div className='drop-file'>
                                      <div>
                                         <LuUpload className='upload-icons'/>
                                         <h2>Click to Upload</h2>
                                         <p>{file}</p>
                                      <input type='file' onChange={(e)=>{setFile(e.target.files[0].name)}}on></input>
                                      </div>
                                   </div>
                                   <div><input type='submit' value="Send Message" className='input'></input></div>
                             </div>
                         </form>
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