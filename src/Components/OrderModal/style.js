import styled from "styled-components";
import { mobile } from "../../Responsive";

const OpenModalBtn=styled.div`
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
    
`

const Overlay=styled.div`
    width: 100%;
    height: 100%;
    position: fixed;   
    background: rgba(49,49,49,0.8);
    transition: 3s all ease;
      
`


const ModalContent=styled.div`
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 60px 50px;
    border-radius: 10px;
    max-width: 600px;
    width:100%;
    height:300px;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 8px; 
    line-height: 40px;
    ${mobile({ maxWidth:'300px',height:'260px',padding:'50px 20px'})}
`

const ModalInfo=styled.p`
    font-size:18px;
    ${mobile({ fontSize:'16px'})}
`


const CloseModalBtn=styled.button`
    position: absolute;
    top: 0.5px;
    right: 0.5px;
    padding: 5px 7px;
    ${mobile({ fontSize:'15px'})}
`

const ModalTitle=styled.h2`
        font-weight: 400;
`


const Button=styled.div`
        height:40px;
        width:200px;
        border-radius: 6px;
        background-color: #2874f0;
        color:white;
        font-size: 1.1rem;
        border:none;
        cursor: pointer;
        align-items: center;        
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        line-height:35px;
        ${mobile({ fontSize:'0.92rem'})}
      
` 

export {OpenModalBtn,Overlay,ModalContent,CloseModalBtn,ModalTitle,ModalInfo,Button}