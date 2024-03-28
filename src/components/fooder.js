import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";

function Fooder() {
  return (
    <div>
            <hr className='fooder-hr'></hr>
           <div className='fooder'>
                 <p>@23-02-2024 on the day created</p>
                 <p>Made by @S.Saravanan ❤️</p>
                 <div>
                      <LuInstagram  className='social-icons'/>
                      <FaLinkedinIn  className='social-icons'/>
                      <TbBrandGithubFilled  className='social-icons'/>
                      <FaFacebookF className='social-icons' />
                 </div>
           </div>

           
    </div>
  )
}

export default Fooder