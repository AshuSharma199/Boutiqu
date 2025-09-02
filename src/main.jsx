import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/NavBar.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import Clothing from './Pages/Clothing.jsx'
import About from './Pages/about.jsx'

const router =createBrowserRouter([
  {
  path:'/',
  element:
  <div> 
    <Navbar/>
    <Home/>
    <App/>
   
  </div>
  },
  {
    path:'/contact',
    element:
    <div>
      <Navbar/>
      <Contact/>
    </div>
  },
  {
    path:'/',
    element:
    <div>
      <Navbar/>
      <Contact/>
    </div>
  },
  {
    path:'/clothing',
    element:
    <div>
      <Navbar/>
      <Clothing/>
    </div>
  },
  {
    path:'/about',
    element:
    <div>
      <Navbar/>
    <About/>
    </div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)