import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import SaleImage from "./components/SaleImage";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Footer from "./components/Footer";
import './style.css'
function App(){
  return(
    <>
  <Navbar></Navbar>
  <Categories></Categories>
  <SaleImage></SaleImage>
  <Recommended></Recommended>
  <Topics></Topics>
<Popular></Popular>
<Footer></Footer>
    </>
  )
}

export default App;