import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './Context/AppContext';
import ProdContextProvider from './Context/ProdContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter> 
        <ProdContextProvider>
            <AppContextProvider>
                <App />                                {/*wrap the whole app inside CartContext & then ProdContext*/}                           
           </AppContextProvider>   
        </ProdContextProvider>    
   </BrowserRouter>
   
);


reportWebVitals();
