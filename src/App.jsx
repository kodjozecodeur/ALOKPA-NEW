import React from 'react'
import Header from "./components/Header"
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navbar from './components/Navbar';

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
        brand = "GO."
      />
    </div>
    
  )
}

export default App
