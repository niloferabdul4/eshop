import styled from "styled-components";
import { mobile } from "../../Responsive";

/*************    CART STYLING   **************/


export const Container=styled.div`
        display: flex;
        width:100%;
        color:rgba(0,0,0,0.74);
        padding: 20px;
        height:100%;
        ${mobile({ flexDirection:'column-reverse',padding:'0px'})}

`

export const LeftWrapper=styled.div`
        flex:0.75;
        margin:10px; 
        ${mobile({margin:'10px 0px'})}
      
`

export const RightWrapper=styled.div`
        flex:0.25;
        margin:10px; 
        ${mobile({margin:'10px 0px'})}
`

export const Button=styled.div`
        height:45px;
        width:70%;
        border-radius: 8px;
        background-color: #2874f0;
        color:white;
        font-size: 1.1rem;
        border:none;
        cursor: pointer;
        display: flex;
        align-items: center; 
        justify-content:center ;
        margin-left: auto;
        margin-right: auto; 
        ${mobile({height:'32px',fontSize:'14px'})}
            
        
`  

export const CButton=styled.div`
        height:40px;
        width:200px;
        border-radius: 6px;
        border:1px solid  #2874f0;
        background-color: ${props=>props.id==='checkout'? ' #2874f0' : 'white' };
        color:${props=>props.id==='checkout'? 'white' : ' #2874f0' };
        font-size: 1.1rem;       
        cursor: pointer;
        align-items: center;
        font-weight: 400;
        margin-left:${props=>props.id==='continue'? '0px' : '10px' };
        margin-right:${props=>props.id==='checkout'? '0px' : '1px' };
        margin-bottom: 20px;
        padding: 10px; 
        ${mobile({display:'none'})}   

`  
export const Title=styled.h2`
        font-weight: 600;
        padding:10px;
        justify-content: flex-start;
        ${mobile({fontSize:'20px',lineHeight:'30px'})}
    
`


export const OrderSummary=styled.div`
        display: flex;
        flex-direction: column;             
        border:none;
        margin-top: 120px;
        padding: 40px;
        max-height: 30vh;
        border-radius: 8px;
        gap:'10px';
        background-color: white;
        ${mobile({ padding:'15px',gap:'4px',marginTop:'0px'})}   
`       

export const AmountDetails=styled.div`       
        flex-direction: row; 
        font-size: 18px;
        font-weight:600;
        text-align: justify;
        line-height: 50px;
        ${mobile({ fontSize:'14px'})}   
` 

export const ClearButton=styled.button`
        border:none;
        border-radius: 6px;
        color:darkslategrey;
        padding:10px;
        font-size: 1.1rem;
        background-color: #2874f0;
        color: white;
        width:100%;
        margin: 20px 0px ;
        ${mobile({height:'32px',fontSize:'14px'})}

`
export const Message=styled.p`
       font-size: 20px;
       margin-left: auto;
       margin-right: auto;
       margin: 100px;
       ${mobile({ fontSize:'16px'})}   



`

/*
export const Description=styled.div`        
        line-height: 30px;
        font-size:18px;
        text-align: justify;
        padding:20px ; 
        ${mobile({fontSize:'14px' })}        

`
*/

/*************    CART PRODUCT STYLING   **************/

export const CartProductContainer=styled.div`
        display:flex;
        width:100%;
        border-radius: 6px;
        background-color: white;
        display:flex;
        margin: 6px 0px;
        padding: 10px;
        ${mobile({flexDirection:'row',minHeight:'200px',margin:'0px'})}
      
`

export const Image=styled.img`
       flex:0.2;
       height:160px;
       min-width:150px;
       object-fit: contain;
       //padding: 20px;
       margin:20px;
       ${mobile({height:'150px',minWidth:'120px'})}    

`

export const InfoContainer=styled.div`
        display:flex;
        flex:0.8;
        flex-direction: column;
        justify-content: space-between;
        //margin-left:30px; 
        padding: 20px; 
        ${mobile({ gap:'20px',padding:'20px'})}        

`
export const Info=styled.div`
        display:flex;
        justify-content: space-between;
        align-items: flex-start;
        width:100%;
        ${mobile({ flexDirection:'column',gap:'10px'})}      

`

export const BtnContainer=styled.div`
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width:25%;
        gap:15px; 
        ${mobile({ flexDirection:'column',width:'100%'})}   
       
`

export const ProductTitle=styled.h3`
        font-weight: 400;
        text-align: justify;
        ${mobile({ fontSize:'16px',wordWrap:'break-word',fontSize:'16px',lineHeight:'30px'})}

`
export const Price=styled.div`
        display:flex;
        flex-direction: row;        
        font-size: 20px;
        font-weight:600;
        ${mobile({ fontSize:'16px'})}
`

export const DeleteButton=styled.button`
        border:none;
        border:0.5px solid lightgrey;
        border-radius: 10px;
        color: #2874f0;
        padding:10px;
        font-size: 1.1rem;
        width: 100px;
        background-color: white;
        ${mobile({ fontSize:'0.96rem',width:'80px'})}   

`


export const AmountContainer=styled.div`
        display:flex;
        color:black;
        font-weight: 600;
        justify-content: flex-start;
        align-items: center;
        margin:10px 0px;
        ${mobile({ margin:'0px'})}   
        
`
export const Amount=styled.div`
       display:flex;
       justify-content: center;
       padding: 10px;
       margin:0px 4px;
       border:1px solid teal;
       border-radius: 8px;

`

export const Total=styled.div`
        flex:0.5;
        flex-direction: row;        
        font-size: 18px;
        font-weight:700;
        text-align: justify;
        line-height: 30px;
        padding: 10px;
       
` 
export const Size=styled.p`
        font-size: 18px;

`
