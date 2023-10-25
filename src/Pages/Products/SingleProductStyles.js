import styled from "styled-components";
import { mobile } from "../../Responsive";
import { tab } from "../../Responsive";
export const ProductContainer=styled.div`
        display: flex;
        justify-content: center;
        margin-left:auto;
        margin-right: auto;
        width:100%;
        padding:60px;
        color:rgba(0,0,0,0.74);
        background-color: white;;
        height: 90vh;
        ${mobile({ flexDirection:'column',padding:'0px',margin:'0px'})}
       

`
export const ImageContainer=styled.div`
        flex:0.4;
        padding:20px;
        max-height: 500px;
        display: flex;
        justify-content: center; 
        ${mobile({ maxHeight:'250px'})}       
`

export const Image=styled.img`
       width:100%;
       object-fit: contain;      
       ${mobile({ width:'80%'})}
`
export const InfoContainer=styled.div`
        flex:0.55;
        display: flex;
        flex-direction: column;
        padding:20px;
        max-height: 1000px; 
            

`
export const Title=styled.h3`
        font-size:30px;
        font-weight: 400;
        margin-bottom: 20px;
        line-height: 36px;
        text-align: justify;
        ${mobile({ fontSize:'17px'})}
        

`
export const Price=styled.div`
        display:flex;
        flex-direction: row;        
        font-size: 24px;
        font-weight:600;
        ${mobile({ fontSize:'20px'})}

`

export const Description=styled.div`        
        line-height: 30px;
        font-size:18px;
        text-align: justify;
        padding:10px 0px; 
        ${mobile({ fontSize:'16px'})}             

`

export const Rating=styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap:10px;
        margin:10px 0px;   
        ${mobile({ margin:'6px 0px'})} 
        `

export const Span=styled.span`
       width:100%;    
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       padding: 10px;
       gap:20px;

`
export const Button=styled.button`
    height:48px;
    width:300px;
    border-radius: 6px;
    background-color: ${props=>props.id=='cart'? '#2874f0' : 'orange'} ;
    color:${props=>props.id=='cart'? 'white' : 'black'} ;
    font-size: 1.1rem;
    border:none;
    cursor: pointer;
    align-items: center;
    font-weight: 400; 
    ${mobile({ width:'140px',height:'35px',fontSize:'0.86rem',margin:'0px 20px'})}
    ${tab({ width:'160px',height:'40px',fontSize:'0.98rem',margin:'0px 20px'})}

`

