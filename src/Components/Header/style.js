import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const HeaderContainer=styled.div`
    height:70px;
    background-color:  #2874f0;
    color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top:0;
    z-index: 100;
    ${mobile({ height:'50px', margin:'0px',width:'100%'})}   
 
`

const LeftWrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left:30px;
    ${mobile({ gap:'2px',marginLeft:'10px',justifyContent:'center'})}
   
`

const Logo=styled.h2`
    text-align: center;
    align-items: center;
    margin-right: 30px;
    object-fit: contain;
    ${mobile({ fontSize: "14px",marginRight:'2px' })}

`
const SearchBox=styled.div`
    display: flex;
    font-size: 16px;
    align-items: center;
    ${mobile({ fontSize: "14px"})}
     
   
`

const SearchButton=styled.button`
    margin-left:0px;
    color:#2874f0;
    background-color:white;
    padding: 8px;
    border:none;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({height:'20px',padding:'10px 10px'})}


`
const Form=styled.form`
    display: flex;
    align-items: center;
     

`
const Input=styled.input`
    height:30px;
    width:400px;
    border-radius: 1px;
    border:none;
    padding:10px;
    ${mobile({width:'90px',height:'15px'})}

`
const RightWrapper=styled.div`
    display:flex;
    margin-right: 60px;
    align-items: center;
    justify-content: space-around;
    color:white;
    ${mobile({ flex:2,gap:'1px',justifyContent:'space-around' })}

`
 
const Span=styled.span`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap:8px;
    ${mobile({ display:'none'})}
    p{
      font-size  :18px ;
      
    }
    h4{
        color:orange;
        font-size:18px;
       
    }

`

const ShopCart=styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    //margin-left: 20px; 
    position: relative;
    ${mobile({ marginLeft:'0px'})}

`

const CartCount=styled.span`   
    border-radius: 50%; 
    color:white;
    font-size: 1.00rem;
    padding:4px;
    position: absolute;
    bottom:60%;
    left:100%;   
    background-color: red;
    position: absolute;
    ${mobile({ fontSize:'0.75rem',padding:'2px'})}
    
`
const Links=styled(NavLink)`
    margin-left: 50px;
    font-size: 18px;
    text-decoration: none;
    color:white;
    ${mobile({ fontSize:'13px',marginLeft: "15px",gap:'0px' })}    
    
`

export {HeaderContainer,LeftWrapper,Logo,Input,RightWrapper,Links,Form,SearchBox,SearchButton,Span,ShopCart,CartCount}