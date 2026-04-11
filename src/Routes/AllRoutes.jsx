import { Route, Routes } from 'react-router-dom'
import Home_Page from '../Pages/Home_Page'
import Exotic_Fruits_Veg from '../Pages/Navbar_Pages/Exotic_Fruits_Veg'
import Tea from '../Pages/Navbar_Pages/Tea'
import Ghee from '../Pages/Navbar_Pages/Ghee'
import Milk from '../Pages/Navbar_Pages/Milk'
import Fresh_Vegetables from '../Pages/Navbar_Pages/Fresh_Vegetables'
import Eggs_Meat from '../Pages/Home_Pages/Eggs_Meat'
import Buy_and_Save from '../Pages/Home_Pages/Buy_and_Save'
import Ayurveda from '../Pages/Home_Pages/Ayurveda'
import Combo_Store from '..//Pages/Home_Pages/Combo_Store'
import Deals_of_Week from '../Pages/Home_Pages/Deals_of_Week'
import Cart from '../Pages/Navbar_Pages/Cart'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home_Page />}></Route>
        <Route path='/Exotic_Fruits_Veg' element={<Exotic_Fruits_Veg/>}></Route>
        <Route path='/Tea' element={<Tea/>}></Route>
        <Route path='/Ghee' element={<Ghee/>}></Route>
        <Route path='/Milk' element={<Milk/>}></Route>
        <Route path='/Fresh_Vegetables' element={<Fresh_Vegetables/>}></Route>
        <Route path='/Eggs_Meat' element={<Eggs_Meat/>}></Route>
        <Route path='/Buy_and_Save' element={<Buy_and_Save/>}></Route>
        <Route path='/Ayurveda' element={<Ayurveda/>}></Route>
        <Route path='/Combo_Store' element={<Combo_Store/>}></Route>
        <Route path='/Deals_of_Week' element={<Deals_of_Week/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        
      </Routes>
    </>
  )
}

