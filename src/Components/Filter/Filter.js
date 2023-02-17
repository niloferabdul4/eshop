import React,{useState,useContext} from 'react';
import { ProdContext } from '../../Context/ProdContext';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { 
        FilterWrapper,
        Title,
        FilterContainer,
        SubTitle,
        Span,
        CategoryName,
        PriceRange,
        Sort,
        RatingFilter } from './style';
import { FilterContext } from '../../Context/FilterContext';

const Filter = () => {
/*
    const[selectedCategory,setSelectedCategory]=useState('')
   // const [filteredProducts,setFilteredProducts]=useState([])
    
    const [maxPrice,setMaxPrice]=useState(1000)
    const[sort,setSort]=useState('')
    */
   
    const{products,setProducts}=useContext(ProdContext)
    const {filterState:{ sort,rating,category,price},filterDispatch}=useContext(FilterContext)
  
 /***************Category Filter  ************************/

 const filterCategory=(event)=>
  {
 
   filterDispatch({type:'FILTER BY CATEGORY',payload:category})
 }

/************** Price Range  Filter *****************************/

const filterPrice=()=>
{
 
 filterDispatch({type:'FILTER BY PRICE RANGE',
                payload:price})
   
}

/*******************  Sort Products By Price  **************/

 const sortAsc=()=>
 {
    filterDispatch({type:'',
                    payload:'asc'}) 

 }

 const sortDesc=()=>
 {
    filterDispatch({type:'',
                    payload:'desc'})
 }

    return (
        <>
     
        <FilterContainer>
        <Title>Filters</Title>         
        <Span>
          <SubTitle>Filter By Category</SubTitle>           
                 <FilterWrapper onChange={filterCategory} >  
                       <CategoryName>Select Category</CategoryName>
                       <CategoryName value='electronics'>Electronics</CategoryName>
                       <CategoryName value="men's clothing" >Men's Fashions</CategoryName>
                       <CategoryName value="women's clothing" >Women's Fashions</CategoryName>
                       <CategoryName value='jewelery' >Jewelery</CategoryName>                       
                </FilterWrapper>
        </Span>
       <Span>
            <SubTitle>Filter By Price </SubTitle>            
            <PriceRange type='range' min={1} max={1000} value={price} onChange={filterPrice}/>                        
            <label style={{marginLeft:'300px'}}>{price}</label>
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
       <Span>
         <SubTitle>Rating</SubTitle>
         <RatingFilter>

            {/*create an Empty array of 5 , map by taking only the index
               check rating for every iteration...
               when clicked , the current index will be changed to rating value ie) setRating(i+1)
               if rating is > current index=>render the filled icon or else empty icon
            */}
                                                                      
            {[...Array(5)].map((_,i)=>                            
             <span key={i} onClick={filterDispatch({type:'FILTER BY RATING',
                                                   payload:i+1})}>
                {rating>i? 
                    ( <AiFillStar color='gold' size={22} />)
                    :
                    (<AiOutlineStar size={22}/>)
                }
            </span>)}
         </RatingFilter>
       </Span>
       </FilterContainer>

        </>
    );
}

export default Filter;