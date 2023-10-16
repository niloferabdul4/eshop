import React from 'react';
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { useContext } from 'react';
import { ProdContext } from '../../Context/ProdContext';
import FilterToggle from '../FilterToggle/FilterToggle';


const ProductsContainer=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));           
    gap:10px;
    justify-content: center;    
    padding:10px; 
    margin:60px;
    background-color:rgb(234,237,237);
    ${mobile({margin:'0px',margin:'20px 0px'})}
`


const ProductsAll = () => {
  
    const{products}=useContext(ProdContext)  

    return (   
        <>
            <FilterToggle/>
            <ProductsContainer>

                    {products.map(item=>{return <ProductCard key={item.id}  prod={item}
                                                        />  
                    })
                    }   
        </ProductsContainer>
        </>

);
}


export default ProductsAll;
