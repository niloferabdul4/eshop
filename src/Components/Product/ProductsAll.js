import React from 'react';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { useContext } from 'react';
import { ProdContext } from '../../Context/ProdContext';


const ProductsContainer=styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);                 
    gap:15px;
    justify-content: center;    
    padding:10px; 
    margin:60px;

`


const ProductsAll = () => {
  
    const{products}=useContext(ProdContext)
    

    
         
return (

    
    <ProductsContainer>

            {products.map(item=>{return <ProductCard key={item.id}  prod={item}
                                                  />  
            })
            }   
       

</ProductsContainer>


);
}


export default ProductsAll;
