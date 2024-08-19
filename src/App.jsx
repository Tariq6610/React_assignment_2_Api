import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Getdata from './components/Api.jsx'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom"
import Layout from './components/RootLayout.jsx'
import Product from './components/product.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Getdata/>} />
        <Route path='product/:id' element={<Product />}/>
    </Route>
  )
)


function App() {
  return (
 <>
   <RouterProvider router={router} />
 </>
  )
}

export default App
