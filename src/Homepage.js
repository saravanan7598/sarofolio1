
import Body from './components/body';
import Fooder from './components/fooder';
import Letswork from './components/Letswork';
import Maincontent from './components/Maincontent';
import Myservices from './components/myservices';
import Sider from './components/Sider';
import What from './components/what ';
import Header2 from './Routes-components/Header2';
import React, { useEffect, useState } from 'react'
import circlelogo from './images/logos1.jpg'



function Homepage() {
const[showed,setShowed]=useState(false);
var show = () =>
{
      setShowed(!showed);
}
 useEffect(()=>{
  const text = document.querySelector('.p');
  text.innerHTML =text.innerText.split("").map(
       (char , i)=>`<span style="transform:rotate(${i*12.1}deg)">${char}</span>`).join("")
 },[])

  
  return (
    <div>
    <div className='welcome-container'>
          <div className={showed ? 'welcome welcomeshow' : 'welcome'}>
                 {/* <video autoPlay muted src={video} loop className='video'></video> */}
                  <h1>Welcome to My <span>PortFolio</span></h1>
                  <div className='cir-cle'>
                        <div className='lo-go'></div>
                        <div className='te-xt'>
                            <p className='p'>Saravanan - View My PortFolio-</p>
                        </div>
                  </div>
                   <img src={circlelogo} alt='' onClick={show}></img>
                   <button onClick={show}>View my PortFolio</button>
          </div>

{ showed && (
    <div>
    <Header2/>
   <Body/>
   <Maincontent/>
   <Sider/>
   <What/>
   <Myservices/>
   <Letswork/>
   <Fooder/>
   </div>)
}
  
    </div>
    </div>

  )
}

export default Homepage