import React, { useEffect } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { MdAddLink } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import insta from '../images/insta.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Letswork() {
    useEffect(()=>{
        AOS.init()
 },[])
  return (
    <div> 
          <div className='let-work'>
                   <h1 
                   data-aos="slide-right"  data-aos-delay="20"  data-aos-duration="80"
                   data-aos-easing="ease-in" data-aos-offset="400" data-aos-once="true" >
                   Let`s work together<span>.</span>
                   </h1>
             <div className='work-together-flex' >
                   <div className='left' 
                   data-aos="slide-right" data-aos-delay="50" 
                   data-aos-once="true"    data-aos-duration="300" 
                   data-aos-easing="ease-in-out" data-aos-offset="400">
                       <div className='all-contact'>
                           <div className='input'>
                                 <div className='first-name'><input type='text' required/> <p>First Name</p><FaRegUserCircle className='icon'/></div>
                                 <div className='last-name'><input type='text' required /> <p>Last Name</p><FaRegUserCircle className='icon'/></div>
                                 <div className='email'><input type='text' required/><p>Email</p><MdOutlineMailOutline className='icon'/></div>
                                 <div className='message'><textarea required/><p>Message</p><TbMessage className='icon' /></div>
                           </div>
                           <div className='input2'>
                                 <div><button className='attachment'><MdAddLink className='attach-icon' />Add attachment<input type='file'/></button></div>
                                 <div><button className='send'>Send Message</button></div>
                           </div>
                       </div>
                   </div>
                   <div className='right'  data-aos="slide-left" data-aos-delay="50"     data-aos-duration="300" data-aos-easing="ease-in-out"  data-aos-offset="400"     data-aos-once="true" >
                   <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#40c057ec"  d="M0,224L18.5,197.3C36.9,171,74,117,111,101.3C147.7,85,185,107,222,112C258.5,117,295,107,332,101.3C369.2,96,406,96,443,96C480,96,517,96,554,117.3C590.8,139,628,181,665,165.3C701.5,149,738,75,775,74.7C812.3,75,849,149,886,186.7C923.1,224,960,224,997,229.3C1033.8,235,1071,245,1108,208C1144.6,171,1182,85,1218,85.3C1255.4,85,1292,171,1329,181.3C1366.2,192,1403,128,1422,96L1440,64L1440
                   ,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5
                   ,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320
                   ,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443
                   ,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,
                   320,18,320L0,320Z"></path></svg> 
                  
                           <div className='right-contact'>
                                <div>
                                    <div className='first'>
                                         <IoCall className='phone-icon' />
                                         <div>
                                             <p>Phone</p>
                                             <a href='tel:+917598238098'>+91 7598238098</a>
                                         </div>
                                    </div>

                                    <div className='first second'>
                                         <FaWhatsapp   className='phone-icon' />   
                                         <div>
                                             <p>Whatsapp</p>
                                             <a href='https://wa.me/917598238098?text=Hello Saravanan!' >+91 7598238098</a>
                                         </div>
                                    </div>

                                    <div className='first third'>
                                    <MdEmail className='phone-icon'/>
                                         <div>
                                             <p>Email</p>
                                             <a  href='mailto:saravanansaro759823@gmail.com'>saravanansaro759823@gmail.com</a>
                                         </div>
                                    </div>
                                </div>
                                {/* <div className='link'>
                                    <div className='first first'>
                                                   <a href='tel:+917598238098'><IoCall className='phone-icon' /><label>Call</label></a>
                                    </div>

                                    <div className='first second'>
                                                   <a href='https://wa.me/917598238098?text=Hello Saravanan!'><FaWhatsapp   className='phone-icon' /><label>Whatsapp</label></a>
                                    </div>

                                    <div className='first third'>
                                                   <a href='mailto:saravanansaro759823@gmail.com'><MdEmail className='phone-icon'/><label>Email</label></a>
                                    </div>
                                </div> */}
                                    <div className='bg'  data-aos="slide-left" data-aos-delay="300"     data-aos-duration="600" data-aos-easing="ease-in-out"  data-aos-offset="300"     data-aos-once="true">
                                        <div>
                                             <h5><FaLocationDot  className='location-icon' />Address</h5>
                                             <hr></hr>
                                             <p>45/5/1 Bharathiyar 5th street </p>
                                             <p style={{color:"#404040"}}>Sankarankovil</p>
                                        </div>
                                            <div className='social-links'>
                                             <img src={insta} alt=''></img>
                                             <img src={facebook} alt=''></img>
                                             <img src={linkedin} alt=''></img>
                                             <img src={github} alt=''></img>
                                        </div>
                                    </div>
                            </div>
                   </div>
                </div>
          </div>



    </div>
  )
}

export default Letswork