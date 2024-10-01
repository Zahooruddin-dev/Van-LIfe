import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import VanDetail from './pages/VanDetail.jsx'
import Vans from './pages/VanList.jsx'
import About from './pages/About.jsx';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './server.js'
function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>   
  )
}

export default App
