import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container=styled.div`
  display:flex;
  flex-direction: row;
  height:100%;
  width:100%;
  margin-left: auto;
  margin-right:auto;
  ${mobile({flexDirection:'column'})}
 
  

`
export const FilterSection=styled.div`
    flex:0.26;
    display:flex;
    flex-direction: column;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2.6px;
    background-color: white;
    color:rgba(0,0,0,0.7); 
    margin : 10px;
    height:800px;   
    position: sticky;
    ${mobile({display:'none'})}
   
`

export const ProductsSection=styled.div`
    flex:0.74;
    display:grid;
    grid-template-columns: repeat(3,1fr);                 
    gap:15px;
    justify-content: center; 
    padding: 40px;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2.6px;
    background-color: white;
    color:rgba(0,0,0,0.7); 
    margin : 10px; 
    ${mobile({display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'2px',margin:'10px',width:'100%'})}

    
`
export const Title=styled.h2`
    padding: 20px;
    border-bottom:0.1px solid lightgrey;
    width:100%;
    align-items: flex-start;
    justify-content: flex-start;
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

`


export const Filter =styled.select`
    width:100%;
    padding: 12px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;  
    margin-bottom: 0px 40px;
    border:0.1px solid lightgrey; 
    font-size: 16px;

`

export const CategoryName=styled.option `
font-size: 16px;

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
`

export const SubTitle=styled.h3`   
  font-weight: 600;
  margin-bottom:20px;
   
`

export const PriceRange=styled.input`
width:100%;

`