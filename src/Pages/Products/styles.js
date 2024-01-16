import styled from "styled-components";
import { mobile } from "../../Responsive";
import { tab } from "../../Responsive";
export const Container=styled.div`
  
    display:flex;
    flex-direction: row;
    overflow-y: scroll;
    width:100%;
    z-index: 1;
    margin-left: auto;
    margin-right:auto;
  
    ${mobile({flexDirection:'column-reverse',margin:'0px',})}
    ${tab({flexDirection:'column-reverse',margin:'0px',})}
  
  
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
    ${mobile({display:'block',margin:'10px 6px'})}
    ${tab({display:'block',margin:'15px 10px'})}

`
export const ProductsSection=styled.div`
    height: 100%;
    flex:0.75;
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(360px,1fr));   
    grid-template-rows: repeat(auto-fill,minmax(300px,1fr));           
    grid-column-gap:10px;
    grid-row-gap: 10px;
    justify-content: center; 
    padding: 40px 30px;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2.6px;
    color:rgba(0,0,0,0.7); 
    background:transparent;
    margin : 10px; 
    ${mobile({
        flex:'1',
        gridTemplateColumns:'repeat(auto-fill,minmax(175px,1fr))',
        gridTemplateRows:'repeat(auto-fill,minmax(360px,1fr))',
        gridColumnGap:'0.2px',
        gridRowGap:'10px',
        margin:'0.2px',padding:'10px 0px'})}
     ${tab({
        flex:'1',
        gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
        gridTemplateRows:'repeat(auto-fit,minmax(400px,1fr))',
        gridColumnGap:'5px',
        gridRowGap:'10px',
        margin:'4px',padding:'10px 1px',
        width:'100%'})}
    
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

    ${tab({display:'none'})}
`
