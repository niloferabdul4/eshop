import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container=styled.div`
    display:flex;
    flex-direction: row;
    height:100%;
    width:100%;
    z-index: 1;
    margin-left: auto;
    margin-right:auto;
    background-color: lightgrey;;
    ${mobile({flexDirection:'column-reverse',margin:'0px',})}
  
  
`
export const FilterToggle=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin:15px;
    padding:8px;
    color:black;
    display:none;
    background-color: white;
    h4{
     font-weight: 400;    
    }
    ${mobile({display:'block'})}

`
export const ProductsSection=styled.div`
    flex:0.75;
    display:grid;
    grid-template-columns: repeat(3,1fr);                 
    gap:10px;
    justify-content: center; 
    padding: 20px;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2.6px;
    color:rgba(0,0,0,0.7); 
    margin : 10px; 
    ${mobile({gridTemplateColumns:'repeat(2,1fr)', gap:'0px',margin:'0px'})}
    
`


export const FilterSection=styled.div`
    flex:0.25;
    display:flex;
    flex-direction: column;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2.6px;
    background-color: white;
    color:rgba(0,0,0,0.7); 
    margin : 10px 10px;
    height:800px;   
    //position: sticky;
   // top:70px;
    ${mobile({display:'none'})}
   
`
