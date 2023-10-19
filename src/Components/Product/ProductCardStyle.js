import styled from "styled-components"
import { mobile } from "../../Responsive"
export const ProductContainer=styled.div`
    padding:36px 25px;
    margin:20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border:0.5px solid lightgrey;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2px;
    background-color: white;
    z-index: 1;
    max-height: 600px;
    max-width: 380px;  
    cursor:pointer;
    color:rgba(0,0,0,0.7);  
    &:hover{
        transform: scale(1.03);
        transition: all ease 0.3s;
    }
    ${mobile({ maxHeight:'360px',maxWidth:'170px',margin:'10px 0px',boxShadow:'none',padding:'10px  4px'})}
`

export const Image=styled.img`
    object-fit: contain;
    margin-bottom: 10px;
    width:100%;
    max-height:200px; 
    ${mobile({ width:'140px',height:'140px',marginBottom:'2px'})}
    `

export const Title=styled.h3`
    font-weight: 500;
    font-size: 20px;
    font-family: 'Roboto';    
    text-align: justify;
    margin-bottom: 10px;
    line-height: 1.6;
    ${mobile({ fontSize:'15px', fontWeight: '400',marginBottom:'4px'})}
  
`

export const InfoContainer=styled.div`
    display:flex;   
    justify-content:center;
    align-items: flex-start;
    width:100%;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    gap:10px;  
    ${mobile({ padding:'0px',margin:'8px 0px',gap:'4px'})}
   
 
`


export const Price=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap:6px;
    margin: 15px 0px;
    ${mobile({ fontSize:'14px',margin:'8px'})}
`

export const Rating=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap:10px;
    margin: 15px 0px;  
    ${mobile({ fontSize:'14px',margin:'0px'})}  
`
