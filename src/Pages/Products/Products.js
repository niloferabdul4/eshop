import React,{useContext, useEffect} from 'react';
import Filter from '../../Components/Filter/Filter';
import {Container,ProductsSection,FilterToggle,FilterSection} from './styles';
import { ProdContext } from '../../Context/ProdContext';
import ProductCard from '../../Components/Product/ProductCard';
import {RiArrowDropDownLine} from 'react-icons/ri'
import { Context } from '../../Context/Context';

const Products = () => {
  
    const{products,setProducts,showFilters,setShowFilters}=useContext(ProdContext)   
    const {filterState:{sort,category,maxPrice,searchText}}=useContext(Context) 

    useEffect(()=>{setProducts(products)},[products])
    
    const updateFilter=()=>
    {     

       /********  For Sorting By Price **********/

        let updatedProducts=products;
        if(sort)
        {
          updatedProducts=updatedProducts.sort((a,b)=>
          (
            sort==='asc'? (a.price-b.price) : (b.price-a.price)
          ))
        }
        if(category)
        {
            updatedProducts=updatedProducts.filter(item=>item.category===category) 
            if(category==='all')       
            {
                updatedProducts=products;
            }
        }
        if(maxPrice)
        {
        updatedProducts=updatedProducts.filter(item=>item.price<=maxPrice)
        }
     
        return updatedProducts;

        
    }
   
       
    
    return (
        <Container>
            <ProductsSection>        
                {updateFilter().map(item=>{return <ProductCard key={item.id}  prod={item}/>  
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