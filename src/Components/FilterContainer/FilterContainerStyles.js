import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container=styled.div`
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:70%;
        padding:10px 0px;
        margin: 10px 0px;  
        ${mobile({ width:'100%' })}
        
`

export const Filter=styled.div`
        display: flex;
        align-items: center;
`
export const FilterTitle=styled.h3`
        margin-right: 14px;
        ${mobile({fontSize:'16px' })}
`

export const SelectBox=styled.select`
        padding:6px;
        font-size: 1rem;
        margin-right: 10px;
        border-radius: 5px;
        border:1px solid teal;   
        ${mobile({ fontSize:'0.85rem' })}     
`
export const FilterColor=styled.button`
        width:20px;
        height:20px;
        border-radius: 50%;
        background-color: ${props=>props.color};
        margin-right:6px;
        border:none;
        
`
export const Span=styled.span`
        display:flex;
        flex-direction:row;
      

`