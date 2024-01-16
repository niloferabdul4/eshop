import styled from "styled-components"
import { mobile } from "../../Responsive"
import { tab } from "../../Responsive"
export const ProductContainer=styled.div`
    padding:26px 20px;
    margin:20px;
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border:0.5px solid lightgrey;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2px;
    background-color: white;
    z-index: 1;
    height:500px;
    min-height: 500px;
    max-width: 380px;  
    cursor:pointer;
    color:rgba(0,0,0,0.7);  
    &:hover{
        transform: scale(1.03);
        transition: all ease 0.3s;
    }
    ${mobile({height:'380px',minHeight:'360px',width:'175px',margin:'10px 0px',boxShadow:'none',padding:'10px 8px'})}
    ${tab({ minHeight:'360px',width:'190px',margin:'10px 0px',boxShadow:'none',padding:'10px'})}
`

export const Image=styled.img`
    object-fit: contain;
    margin-bottom: 8px;
    width:100%;
    height:240px; 
    ${mobile({ width:'130px',height:'150px',marginBottom:'1px'})}
    ${tab({ width:'150px',height:'180px',marginBottom:'1px'})}
    `

export const Title=styled.h3`
    font-weight: 500;
    font-size: 18px;
    font-family: 'Roboto';    
    margin-bottom: 10px;
    line-height: 1.5;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    ${mobile({ fontSize:'15px', fontWeight: '400',marginBottom:'2px'})}
  
`

export const InfoContainer=styled.div`
flex:0.5;
    display:flex; 
    flex-grow :1 ;
    justify-content:center;
    align-items: flex-start;
    width:100%;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height:max-content;
    ${mobile({ padding:'0px',margin:'1px 0px',gap:'2px'})}
   
 
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
    margin: 2px 0px;  
    ${mobile({ fontSize:'14px',margin:'0px'})}  
`
export const BtnContainer=styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    ${mobile({ fontSize:'14px',margin:'0px'})}  
`