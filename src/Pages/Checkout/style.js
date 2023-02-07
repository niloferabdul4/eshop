import styled from "styled-components";

const PaymentContainer=styled.div`
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: white;
    border-bottom: 1px solid lightgray;
    margin:100px;
    
`

const PaymentSection=styled.div`
    display: flex;
    padding: 10px;    
    border-bottom: 1px solid lightgray;
  
   

`

const PaymentTitle=styled.h3`
        font-weight: 600;
        flex: 0.2;
       
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
         gap:15px;

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

`  

export {PaymentContainer,PaymentItem,PaymentSection,PaymentTitle,PaymentDetails,PaymentAddress,OrderContainer,Button}