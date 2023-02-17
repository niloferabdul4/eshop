import styled from "styled-components";
import { mobile } from "../../Responsive";



export const Title=styled.h3`
    padding: 15px;
    border:none;
    font-size:1.2rem;
    height:50px;
    width:100%;
    background-color: rgba(0,0,0,0.1);
    ${mobile({fontSize:'1.1rem'})}
    /*
    width:100%;
    align-items: flex-start;
    justify-content: flex-start;
    */
`

export const FilterContainer=styled.div`
    display: flex;
    flex-direction: column;
    ${mobile({margin:'0px'})}
       
`


export const Span =styled.span`
    width:100%;
    max-height: 600px;
    padding: 30px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap:15px;
    margin-bottom: 10px;
    border-bottom:0.1px solid lightgrey;
    ${mobile({maxHeight:'300px',padding:'10px'})}
`


export const FilterWrapper =styled.select`
    width:100%;
    padding: 12px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;  
    margin-bottom: 0px 40px;
    border:0.1px solid lightgrey; 
    font-size: 16px;
    ${mobile({fontSize:'14px',padding:'6px'})}
`

export const CategoryName=styled.option `
    font-size: 16px;
    ${mobile({fontSize:'14px'})}
`
export const Sort =styled.span`
    width:100%;
    padding: 10px;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap:10px;
    font-size: 16px;   
    ${mobile({fontSize:'14px',padding:'5px'})} 
`

export const SubTitle=styled.h3`   
  font-weight: 600;
  margin-bottom:20px;
  ${mobile({fontSize:'15px'})}
   
`

export const PriceRange=styled.input`
width:100%;

`