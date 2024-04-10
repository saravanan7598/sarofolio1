import React, { useState } from 'react'
import circlelogo from '../images/logo.jpg'

function Welcome() 
{
const[showed,setShowed]=useState(false);
var show = () =>
{
      setShowed(!showed);
}
  return (
      <div>
           <div className={showed ? 'welcome welcomeshow homepage' : 'welcome'}>
               <h1>Welcome to my Profolio</h1>
               <img src={circlelogo} alt=''></img>
               <button onClick={show}>Click Here</button>
           </div>
      </div>
  )
}

export default Welcome