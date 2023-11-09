import React from 'react'
import Header from "./components/Header"
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner1 from "./assets/Banner1.jpg"
import Banner2 from "./assets/Banner2.jpg"
import Featured from './components/Featured';
import SessionName from './components/SessionName';
import Collections from './components/Collections';
import Suscribe from './components/Suscribe';
import Bests from './components/Bests';
import Testimonies from './components/testimonies';
import Flash from './components/Flash';

function App() {
  
  
  return(
    <div>
      <Header 
        contact = "+1 555 555 5555" 
        shipping ="Free shipping $200"
        icon1 = {<PersonIcon />}
        icon2 = {<AddShoppingCartIcon />}
        icon3 = {<FavoriteBorderIcon />}
        icon4 = {<SearchIcon />}
      />
      <Navbar 
        brand = "ALOKPA"    
      />
      <Hero
        banner1 = {Banner1}
        alt1= "banner-1"
        heroTxt1 ={<h1 >Summer <br/> Collections</h1>}
        heroP1 ="Lorem ipsum is placeholder text commonly used in the graphic, print"
        heroShop1="Shop it now "

        banner2 = {Banner2}
        alt2= "banner-2"
        heroTxt2 ={<h1 >Casual <br/> Collections</h1>}
        heroP2 ="Lorem ipsum is placeholder text commonly used in the graphic, print"
        heroShop2="Shop it now"
       />
       <SessionName />
       <Featured />
      <Collections />
      <Suscribe />
      <Bests />
      <Testimonies />
      <Flash />
    </div>
    
  )
}

export default App
