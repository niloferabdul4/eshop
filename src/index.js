import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Context/Context';
import FilterContextProvider from './Context/FilterContext';
import ProdContextProvider from './Context/ProdContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter> 
        <ProdContextProvider>
            <ContextProvider>
               <FilterContextProvider>
                    <App />                     {/*wrap the whole app inside  CartContext & then ProdContext*/}       
               </FilterContextProvider>                           
           </ContextProvider>   
        </ProdContextProvider>    
   </BrowserRouter>
   
);


reportWebVitals();
