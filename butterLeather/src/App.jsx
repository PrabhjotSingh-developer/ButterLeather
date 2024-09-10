import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import "./App.css"
import ImgSection from './Components/ImageSection/ImgSection'
import SingleProduct from './Components/SingleProduct/SingleProduct'
import Products from './Components/Products/Products'
import AboutUs from './Components/AboutUs/AboutUs'
import Manufacturing from './Components/ManufacturingSec/Manufacturing'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'
function App() {
  const [isMenubar, setShowMenubar] = useState(false);
 function toggleMenubar()
 {
     if(isMenubar) 
      setShowMenubar(!isMenubar)
    else
      setShowMenubar(!isMenubar)
 }
  return (
   <>
   <Navbar isMenubar = {isMenubar} toggleMenubar = {toggleMenubar}/>
{isMenubar!=true &&
  <>
   <Header/>
   <ImgSection/>
   <Products/>
   <AboutUs/>
   <Manufacturing/>
   <Subscribe/>
   <Footer/>
   </>
}
  
   
  
   </>
  )
}

export default App
