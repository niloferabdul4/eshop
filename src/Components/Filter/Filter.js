import React,{useEffect,useState,useContext} from 'react';
import { ProdContext } from '../../Context/ProdContext';
import { 
        FilterWrapper,
        Title,
        FilterContainer,
        SubTitle,
        Span,
        CategoryName,
        PriceRange,
        Sort, } from './style';

const Filter = () => {

    const[selectedCategory,setSelectedCategory]=useState('')
   // const [filteredProducts,setFilteredProducts]=useState([])
    const [maxPrice,setMaxPrice]=useState(0)
    const[sort,setSort]=useState(null)
    const{products,setProducts}=useContext(ProdContext)
 /***************Category Filter  ************************/

 const filterCategory=(event)=>
 {
 
     setSelectedCategory(event.target.value)   
     const updated=products.filter(item=>(item.category===selectedCategory)) 
     setProducts(updated)     
 }

 useEffect(()=>{fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
 .then(res=>res.json())
 .then(json=>setProducts(json))},[selectedCategory])


/************** Price Range  Filter *****************************/

const filterPrice=(event)=>
{
 
 setMaxPrice(event.target.value) 
 const updatedProducts=products.filter(item=>(item.price<=maxPrice))
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
        <>
     
        <FilterContainer>
        <Title>Filters</Title>         
        <Span>
          <SubTitle>Filter By Category</SubTitle>           
                 <FilterWrapper onChange={filterCategory}>  
                       <CategoryName>Select Category</CategoryName>
                       <CategoryName value='electronics'>Electronics</CategoryName>
                       <CategoryName value="men's clothing" >Men's Fashions</CategoryName>
                       <CategoryName value="women's clothing" >Women's Fashions</CategoryName>
                       <CategoryName value='jewelery' >Jewelery</CategoryName>                       
                </FilterWrapper>
        </Span>
       <Span>
            <SubTitle>Filter By Price </SubTitle>            
            <PriceRange type='range' min='1' max='1000' value={maxPrice} onChange={filterPrice}/>                        
            <label style={{marginLeft:'300px'}}>{maxPrice}</label>
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
       </FilterContainer>

        </>
    );
}

export default Filter;
