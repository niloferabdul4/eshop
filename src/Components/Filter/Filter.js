import React,{useContext} from 'react';
import { Context } from '../../Context/Context';


import { 
        FilterWrapper,
        Title,
        FilterContainer,
        SubTitle,
        Span,
        CategoryName,
        PriceRange,
        Sort,
        ClearFilterButton } from './style';


const Filter = () => {

   const {filterState:{sort,category,maxPrice},filterDispatch}=useContext(Context)      

    return (
        <>
     
        <FilterContainer>
        <Title>Filters</Title>         
        <Span>
          <SubTitle>Filter By Category</SubTitle>                    
                <FilterWrapper  onChange={(event)=>filterDispatch({type:'FILTER BY CATEGORY', payload:event.target.value}) } value={category}  >             
                               <CategoryName value='all'>All</CategoryName>
                               <CategoryName value='electronics'>Electronics</CategoryName>
                               <CategoryName value="men's clothing">Men's Fashion</CategoryName>
                               <CategoryName value="women's clothing">Womens Fashion</CategoryName>
                               <CategoryName value='jewelery'>Jewelery</CategoryName>      
                </FilterWrapper>
        </Span>
       <Span>
            <SubTitle>Filter By Price </SubTitle>            
            <PriceRange type='range' min={1} max={1000} value={maxPrice} onChange={(event)=>{filterDispatch({type:'FILTER BY PRICE RANGE',payload:event.target.value})}}/>                        
            <label style={{marginLeft:'300px'}}>{maxPrice}</label>
       </Span>
       <Span>
            <SubTitle>Sort By </SubTitle>
            <Sort>
                    <input type='radio' name='price' id='1' value={sort} onChange={()=>{ filterDispatch({type:'SORT BY PRICE',payload:'asc'})}} checked={sort==='asc' ? true : false}/>
                    <label htmlFor='1'>Price(Lowest First)</label>
            </Sort>
            <Sort>
                    <input type='radio' name='price' id='2' value={sort} onChange={()=>{ filterDispatch({type:'SORT BY PRICE',payload:'desc'})}} checked={sort==='desc' ? true : false}  />
                    <label htmlFor='2'>Price(Highest First)</label>
             </Sort>
       </Span>
     
       <ClearFilterButton onClick={() =>{filterDispatch({type: "CLEAR FILTERS"})}}>Clear Filters</ClearFilterButton>
       
       </FilterContainer>

        </>
    );
}

export default Filter;