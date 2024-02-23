import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {RouterProvider,Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './Layout'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import ContactUs from './Component/Contact/ContactUs'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>

      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>}/>

    </Route>

  )
)
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
