import React from 'react'
import {Routes,Route} from "react-router-dom"
import CartPage from '../components/CartPage'
import ProductList from '../components/ProductList'

export default function AllRoutes() {
  return (
    <>
    <Routes>
     <Route path='/' element={<ProductList/>}/>
     <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </>
  )
}
