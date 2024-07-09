import React from 'react';
// Biblioteca de enrutamiento para aplicaciones React que permite
// la navegación dentro de una aplicación de una sola página (SPA)
// Route --> Renderiza una única ruta con el componente a renderizar
// Routes --> Contenedor que envuelve múltiples rutas para que una sola
// ruta se renderiza a la vez. 
import { Route, Routes } from 'react-router-dom';
//Componentes de interfaz de usuario para React basada en el sistema de diseño de Material Design de Google.
// Box --> Es un componente de diseño que proporciona una forma 
// conveniente de aplicar estilos utilizando el sistema de diseño de MUI
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} /> 
            </Routes>
            <Footer />
        </Box>
    )
}

export default App