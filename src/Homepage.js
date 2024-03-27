import React from 'react'
import Body from './components/body';
import Fooder from './components/fooder';
import Header from './components/header';
import Letswork from './components/Letswork';
import Maincontent from './components/Maincontent';
import Myservices from './components/myservices';
import Sider from './components/Sider';
import What from './components/what ';

function Homepage() {
  return (
    <div>
         <Header/>
        <Body/>
        <Maincontent/>
        <Sider/>
        <What/>
        <Myservices/>
        <Letswork/>
        <Fooder/>
    </div>
  )
}

export default Homepage