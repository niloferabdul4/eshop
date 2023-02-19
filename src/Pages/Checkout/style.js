import styled from "styled-components";
import { mobile } from "../../Responsive";

const PaymentContainer=styled.div`
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: white;
    border-bottom: 1px solid lightgray;
    margin:80px 160px;
    width:60%; 
    h2{
        margin: 30px;
        ${mobile({fontSize:'20px'})}  
    }
    ${mobile({margin:'60px 0px ',width:'100%'})}   
`

const PaymentSection=styled.div`
    display: flex;
    padding: 15px;    
    border-bottom: 1px solid lightgray;
    ${mobile({padding:'5px',flexDirection:'column'})}
  
   

`

const PaymentTitle=styled.h3`
        font-weight: 600;
        flex: 0.2;
        margin: 10px;
        ${mobile({fontSize:'18px'})}
      
`

const OrderContainer=styled.div`      
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border:none;
        margin:20px;
        padding:10px;
        gap:20px;

`
const PaymentDetails=styled.div`
         flex: 0.8;
         padding-bottom: 20px;
         h2{
                ${mobile({fontSize:'18px'})}  
         }
        

`
const PaymentItem=styled.div`
         flex: 0.8;

`
const PaymentAddress=styled.div`
         flex: 0.8;
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
         align-items: flex-start;
         font-size: 18px;
         padding: 10px;
         gap:20px;
         ${mobile({fontSize:'16px'})}  

`

const Button=styled.div`
        height:50px;
        width:10%;
        border-radius: 6px;
        background-color: #2874f0;
        color:white;
        font-size: 1.2rem;
        border:none;
        cursor: pointer;
        align-items: center;      
        margin:  20px auto;
        padding: 15px;   
        ${mobile({width:'40%',height:'40px',fontSize:'1rem',padding:'10px'})}  
  
 

`  
/*************   Checkout Product Container  ****************/


const CheckoutProductContainer=styled.div`
        display:flex;
        border-radius: 6px;
        background-color: white;
        display:flex;
        padding: 10px;
        ${mobile({flexDirection:'row',minHeight:'200px'})}
      
`

const Image=styled.img`
       flex:0.1%;
       height:140px;  
       object-fit: contain;
       ${mobile({height:'150px',minWidth:'120px'})}    

`

const InfoContainer=styled.div`
        flex:0.8%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px; 
        gap:20px;
        ${mobile({ gap:'20px',padding:'6px'})}        

`
const ProductTitle=styled.h3`
        font-weight: 400;
        text-align: justify;
        ${mobile({ fontSize:'15px',wordWrap:'break-word',lineHeight:'30px'})}

`

const AmountDetails=styled.h3`    
    
      ${mobile({ fontSize:'15px'})}
`




export {PaymentContainer,PaymentItem,PaymentSection,PaymentTitle,PaymentDetails,PaymentAddress,OrderContainer,Button,
        CheckoutProductContainer,Image,InfoContainer,ProductTitle,AmountDetails}