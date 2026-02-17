import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import HotelRooms from './pages/HotelRooms';


function App() {
  const [count, setCount] = useState(0)
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
    {!isOwnerPath && <Header />}
    <Routes>
      <Route path ='/' element ={<Home />}/>
      <Route path ='/rooms' element ={<HotelRooms />}/>
    </Routes>
    <>
     <Footer />
    </>
   
  
    
    </>
  );
};

export default App;
