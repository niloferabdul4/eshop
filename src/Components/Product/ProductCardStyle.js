import styled from "styled-components"
import { mobile } from "../../Responsive"
export const ProductContainer=styled.div`
    padding:20px;
    margin:20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border:0.5px solid lightgrey;
    //box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2px;
    background-color: white;
    z-index: 1;
    width: 100%;
    height: 540px;
    max-width: 340px;  
    color:rgba(0,0,0,0.7);  
    ${mobile({ minHeight:'420px',maxWidth:'180px',margin:'0px',boxShadow:'none'})}
`

export const Image=styled.img`
    object-fit: contain;
    margin-bottom: 30px;
    width:100%;
    max-height:200px; 
    ${mobile({ width:'140px',height:'140px',marginBottom:'10px'})}
    `

export const Title=styled.h3`
    font-weight: 500;
    font-size: 19px;
    font-family: 'Roboto';    
    text-align: justify;
    margin-bottom: 10px;
    line-height: 30px;
    ${mobile({ fontSize:'15px', fontWeight: '400',lineHeight:'25px'})}
  
`

export const InfoContainer=styled.div`
    display:flex;   
    justify-content:center;
    align-items: flex-start;
    padding: 10px;
    margin: 0px 40px;  
    word-wrap: break-word;
    width:100%;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    gap:20px;  
    ${mobile({ padding:'0px',margin:'8px 10px'})}
   
 
`


export const Price=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap:6px;
    margin: 15px 0px;
    ${mobile({ fontSize:'14px',margin:'10px'})}
`

export const Rating=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap:10px;
    margin: 15px 0px;  
    ${mobile({ fontSize:'14px',margin:'0px'})}  
`
