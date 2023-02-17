import React,{useContext} from 'react';
import Filter from '../../Components/Filter/Filter';
import {Container,ProductsSection,FilterToggle,FilterSection} from './styles';
import { ProdContext } from '../../Context/ProdContext';
import ProductCard from '../../Components/Product/ProductCard';
import {RiArrowDropDownLine} from 'react-icons/ri'

const Products = () => {
  
    const{products,showFilters,setShowFilters}=useContext(ProdContext)   
 
 
    return (
        <Container>
            <ProductsSection>        
                {products.map(item=>{return <ProductCard key={item.id}  prod={item}/>  
                        })
                        }           
            </ProductsSection> 
            <FilterSection>
                <Filter />      
            </FilterSection>                 
            <FilterToggle>
                <h4>Filters</h4>
                <RiArrowDropDownLine onClick={()=>{setShowFilters(showFilters=>!showFilters)}} />   
                {showFilters && <Filter/>}      
            </FilterToggle>   
               
       </Container>
);
}

export default Products;