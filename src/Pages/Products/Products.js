import React from 'react';
import {useState, useEffect,useContext } from 'react';
import {    Container, 
            FilterSection,
            Filter,
            Title,
            SubTitle,
            Span,
            CategoryName,
            PriceRange,
            Sort,
            ProductsSection} from './styles';
import { ProdContext } from '../../Context/ProdContext';
import ProductCard from '../../Components/Product/ProductCard';

const Products = () => {
  
    const{products,setProducts}=useContext(ProdContext)  
    const[selectedCategory,setSelectedCategory]=useState('')
    const [filteredProducts,setFilteredProducts]=useState([])
    const [maxprice,setMaxPrice]=useState(1000)
    const[sort,setSort]=useState(null)

 
    useEffect(()=>{fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>setProducts(json))},[])


  /***************Category Filter  ************************/

    const filterCategory=(event)=>
    {
    
        setSelectedCategory(event.target.value)   
        const updated=products.filter(item=>(item.category===selectedCategory)) 
        setFilteredProducts(updated)     
    }

    useEffect(()=>{fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    .then(res=>res.json())
    .then(json=>setProducts(json))},[selectedCategory])


/************** Price Range  Filter *****************************/

   const filterPrice=(event)=>
   {
    
    setMaxPrice(event.target.value) 
    const updatedProducts=products.filter(item=>(item.price<=maxprice))
    setProducts(updatedProducts) 
      
   }

   /*******************  Sort Products By Price  **************/
 
    const sortAsc=()=>{
        setSort('asc')
        const sortedProducts=(products.sort((a, b) => a.price-b.price));
        setProducts(sortedProducts)     

    }

    const sortDesc=()=>{
        setSort('desc')
        const sortedProducts=(products.sort((a, b) => b.price-a.price));
        setProducts(sortedProducts) 

    }

  
    
return (
    <Container>
    
    <FilterSection>
       
        <Title>Filters</Title>
        <Span>
          <SubTitle>Filter By Category</SubTitle>
           
                 <Filter onChange={filterCategory}>  
                       <CategoryName>Select Category</CategoryName>
                       <CategoryName value='electronics'>Electronics</CategoryName>
                       <CategoryName value="men's clothing" >Men's Fashions</CategoryName>
                       <CategoryName value="women's clothing" >Women's Fashions</CategoryName>
                       <CategoryName value='jewelery' >Jewelery</CategoryName>
                       
                </Filter>

        </Span>
       <Span>
            <SubTitle>Filter By Price </SubTitle>
            
            <PriceRange type='range' min={1} max={1000}  onChange={filterPrice}/>                        
            <label style={{marginLeft:'300px'}}>{maxprice}</label>
       </Span>
       <Span>
            <SubTitle>Sort By </SubTitle>
            <Sort>
                    <input type='radio' name='price' id='1' value='asc'  onChange={sortAsc} />
                    <label htmlFor='1'>Price(Lowest First)</label>
            </Sort>
            <Sort>
                    <input type='radio' name='price' id='2' value='desc' onChange={sortDesc}  />
                    <label htmlFor='2'>Price(Highest First)</label>
             </Sort>
       </Span>
    </FilterSection>

    <ProductsSection>        
        {products.map(item=>{return <ProductCard key={item.id}  prod={item}/>  
                })
                }   
        
    </ProductsSection>
</Container>
);
}

export default Products;
