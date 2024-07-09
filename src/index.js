//Esemcial para trabajar componentes React
import React from 'react'; 
//Métodos específicos del navegador que pueden ser utilizados
//para la gestión del DOM. Para renderizado de componentes React
import ReactDOM from 'react-dom';
// 
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//Se crea el contenedor raíz. 
const root = ReactDOM.createRoot(document.getElementById('root'));

//Renderizado del componente App.
root.render(
    <BrowserRouter >
        <App />
    </BrowserRouter>
);


