import styled from "styled-components";
import { mobile } from "../../Responsive";

 export const RegisterContainer=styled.div`
    
    height:100vh;
    width:100vw;
    display :flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin:60px 0px;
   
`

export const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;  
    border:0.1px solid lightgrey;
    border-radius: 5px;  
    background-color: white;
    width:35%;
    padding: 30px;
    margin: 400px;   
    ${mobile({margin:'50px',padding:'20px',width:'100%'})}
`


export const Title=styled.h2`
    font-weight: 600;
    ${mobile({fontSize:'20px'})}
`

export const Form =styled.form`
    background-color: white;
    display: flex;
    flex-wrap: wrap;

`
export const InputWrapper=styled.div`
    width:100%;
    margin:8px 0px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

 

`

export const Label=styled.label`
    font-weight: 600;
    margin: 10px 0px;
    text-align: left;  
    ${mobile({fontSize:'15px'})} 

`

export const Input=styled.input`
   width:100%;
   padding: 10px;
   ${mobile({padding:'6px'})}

`


export const Button=styled.button`
    width:100%;
    background-color: #2874f0;
    height:46px;
    border-radius: 6px;
    font-size: 1.05rem;
    font-weight: 500;
    margin:16px 0px 20px 0px;
    padding: 4px;
    color: white;
    cursor: pointer;
    border:none;
    background: linear-gradient(right bottom rgba(0,0,1,2));
    ${mobile({height:'30px',fontSize:'0.95rem'})}

`

export const SignIn=styled.p`
    font-size:16px;
    margin:10px 0px;   

`

export const ErrorLabel=styled.label`

  font-size: 16px;
  color:red;
  margin-top: 10px;

`
