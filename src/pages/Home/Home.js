import React, { useState } from 'react'
import Carousil from '../../components/carousila/Carousil'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Category from '../../components/shop category/Category'
import BestSelling from '../../components/Best selling/BestSelling'
import './home.css'
import { FaAnglesUp } from "react-icons/fa6";
import ModernHome from '../../components/Modern Home/ModernHome'
import Services from '../../components/Services/Services'
const Home = () => {
  const [top , setTop] = useState(false)
  window.onscroll = ()=>{
    if(window.scrollY >= 600){
      setTop(true)
    }else{
      setTop(false)
    }
  }
  return (
    <div className='all-home'>
    <Header />
    <Carousil />
    <button onClick={()=>window.scrollTo(0 ,0)} className={top===false?'top-hide':'topShow'}> <FaAnglesUp /> </button>
    <Category />
    <BestSelling />
    <ModernHome />
    <Services />
    <Footer />
    </div>
  )
}

export default Home
