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
import About from './pages/About';
import {Box, ThemeProvider} from "@mui/material";
import HotelRoomsDetails from './pages/HotelRoomsDetails';
import Expirience from './pages/Expirience';



function App() {
  const [count, setCount] = useState(0)
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
   
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
    
    {!isOwnerPath && <Header />}
   <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<HotelRooms />} />
          <Route path="/rooms/:id" element={<HotelRoomsDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Expirience />} />
        </Routes>
      </Box>
      {!isOwnerPath && <Footer />}
    </Box>
  
   
  
    
    
  );
};

export default App;
