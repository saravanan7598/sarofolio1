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
                      <a href='https://www.instagram.com/iam_saravanan18/'><LuInstagram  className='social-icons'/></a>
                      <a href='www.linkedin.com/in/saravanan759823'><FaLinkedinIn  className='social-icons'/></a>
                      <a href='#'><TbBrandGithubFilled  className='social-icons'/></a>
                      <a href='https://github.com/Saravanan759823'><FaFacebookF className='social-icons' /></a>
                 </div>
           </div>

           
    </div>
  )
}

export default Fooder