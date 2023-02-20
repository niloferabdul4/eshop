
import styled from "styled-components"
import { mobile } from "../../Responsive"

 const Container=styled.div`
    height:100vh;
    width:100vw;
    display :flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    
    
`

 const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;  
    border:0.1px solid lightgrey;
    border-radius: 7px;  
    background-color: white;
    width:25%;
    padding: 30px;
    ${mobile({margin:'35px',padding:'20px',width:'80%'})} 
    
`


 const Title=styled.h2`
    font-weight: 400;
    ${mobile({fontSize:'20px'})}
`

 const Form =styled.form`
    background-color: white;
    display: flex;
    flex-wrap: wrap;

`
 const InputWrapper=styled.div`
    width:100%;
    margin:10px 0px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    ${mobile({padding:'6px'})}
    

`
  const Label=styled.label`
    font-weight: 400;
    font-size: 18px;
    margin: 10px 0px;
    text-align: left;  
    ${mobile({fontSize:'15px'})}  

`

 const Input=styled.input`
    width:100%;
    padding: 10px;
    ${mobile({padding:'6px'})}
`

 const SignIn=styled.button`
    width:100%;
    background-color: #2874f0;
    color:white;
    height:40px;
    border-radius: 6px;
    font-size: 1.05rem;
    margin:18px 0px;
    padding: 4px;
    cursor: pointer;
    border:none;
    ${mobile({height:'30px',fontSize:'0.95rem'})}

`
 const Span=styled.span`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;

`
 const Section=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:400px;
    width:500px;
    background-color:white;
    gap:20px;
   
`
 const ErrorLabel=styled.label`

  font-size: 16px;
  color:red;
  margin-top: 10px;
  ${mobile({fontSize:'14px'})} 
`

export {Container,Wrapper,Title,Form,InputWrapper,Label,Input,SignIn,Span,Section,ErrorLabel}