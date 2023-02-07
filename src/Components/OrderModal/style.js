import styled from "styled-components";

const OpenModalBtn=styled.div`
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
    
`

const Overlay=styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49,49,49,0.8);
`


const ModalContent=styled.div`
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f1f1f1;
    padding: 100px 50px;
    border-radius: 10px;
    width: 600px;
    height:300px;
    line-height: 40px;
    

`

const ModalInfo=styled.p`
    font-size:18px;

`


const CloseModalBtn=styled.button`
    position: absolute;
    top: 0.5px;
    right: 0.5px;
    padding: 5px 7px;
`

const ModalTitle=styled.h2`
        font-weight: 400;
`


const Button=styled.div`
        height:50px;
        width:300px;
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
        line-height   :50px ;

` 

export {OpenModalBtn,Overlay,ModalContent,CloseModalBtn,ModalTitle,ModalInfo,Button}