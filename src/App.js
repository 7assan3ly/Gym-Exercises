import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import ExerciesDetails from './pages/ExerciesDetails/ExerciesDetails'

function App() {
  return (
    <Box width="400px" sx={{ width: {xl:'1488px'}}} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exercise/:id" element={<ExerciesDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
