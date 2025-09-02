import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/NavBar.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import Clothing from './Pages/Clothing.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Footer from './Pages/Footer.jsx'
import WhatsAppButton from './Pages/Whatsapp.jsx'
import Hero from './Pages/Hero.jsx'
import { div } from 'framer-motion/m'
import Profile from './Pages/Profile.jsx'


const router =createBrowserRouter([
  {
  path:'/',
  element:
  <div> 
    <Navbar/>
    <Hero />
    <Home/>
    <App/> 
    <Clothing/>
    <Services/>
    <Contact/>
    <About />
    <Footer/>
  
  </div>
  },
  {
    path:'/contact',
    element:
    <div>
      <Navbar/>
      <Contact/>
      <WhatsAppButton/>
      <Footer/>
    </div>
  },
  {
    path:'/clothing',
    element:
    <div>
      <Navbar/>
      <Clothing/>
      <WhatsAppButton/>
      <Footer />
    </div>
  },
  {
    path:'/about',
    element:
    <div>
      <Navbar/>
      <About/>
      <WhatsAppButton/>
      <Footer />
    </div>
  },
  {
    path:"/Services",
    element:
    <div>
      <Navbar />
      <Services/>
      <WhatsAppButton/>
      <Footer />
    </div>
  },
  {
    path:'/Profile',
    element:
    <div>
      <Navbar/>
      <Profile/>
      <Footer />
    </div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)