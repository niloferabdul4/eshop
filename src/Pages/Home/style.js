import styled from "styled-components";
import {InfoContainer} from '../../Components/Categories/style';
import { mobile } from "../../Responsive";

/************  BANNER STYLING    ****************/


const BannerContainer=styled.div `
    display: flex;
    justify-content: center;    
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    ${mobile({ flex:0.2,width:'380px'})}
`

const BannerImage=styled.div `
    z-index: -1;
    margin-bottom: -400px;
    mask-image: linear-gradient(to bottom,rgb(0,0,0,1),rgb(0,0,0,0));    /* opacity bottom */
    ${mobile({ marginBottom: '-80px'})}
  `  


const HomeContainer=styled.div`
    display: flex;
    justify-content: center;    
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    height: calc(100vh-70px);
    width:100%;
    ${mobile({padding:'0px'})}
`

const Title=styled.h2`
    font-weight: 400;
    ${mobile({fontSize:'18px'})}
    
`
/********    CATEGORIES STYLING    ***************/

const CategoriesWrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;      
    margin-left: 25px;
    margin-right: 25px;  
    max-width  :100% ;
    padding: 10px;
    margin-bottom: 20px;
     
    ${mobile({flexDirection:"column",padding:'20px'
   })}

`
const LeftSection=styled.div`
    flex:0.8%;   
    display:flex;
    flex-direction: row;
    ${mobile({ display: 'grid',gridTemplateColumns: 'repeat(2,1fr)'})}
     
    
`

const AllContainer=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: 320px;
    width: 400px;
    margin:6px;
    padding:0px;
    background-color: white;
    position: relative;  
    border:none;
    outline: none;
    &:hover ${InfoContainer}
        {
          opacity: 1;           

        }
        ${mobile({height:'250px',width:'320px',margin:'auto '})}

        `

const RightSection=styled.div`
    flex:0.2%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    ${mobile({ display: 'flex',flexDirection:'column' ,justifyContent:'center'})}


`

const SignInButton=styled.div`
        height:40px;
        width:70%;
        border-radius: 8px;
        background-color: orange;
        color:black;
        font-size: 1rem;
        border:none;
        cursor: pointer;
        display: flex;
        align-items: center; 
        justify-content:center ;
        margin-left:auto;
        margin-right: auto;
        ${mobile({height:'30px',fontSize:'0.85rem'})} 
            
        
`  
const SignInAlertBox=styled.div`
        display: flex;
        flex-direction: column; 
        justify-content:center;
        border:none;
        margin-top: 20px;
        padding: 20px;
        max-height: 30vh;
        border-radius: 8px;
        background-color: white;
        gap:15px;
        ${mobile({ padding:'15px',gap:'6px'})}   
`       

 const Text=styled.h2`       
        flex-direction: row; 
        font-weight:600;
        //text-align: justify;
        //line-height: 50px;
       
        ${mobile({ fontSize:'14px'})}   
` 

/***********  TRENDS  STYLING    **************/

const DealsWrapper=styled.div`
    margin-left: 15px;
    margin-right: 15px;    
    padding: 10px;
    margin-bottom: 20px;
    z-index: 1;  
    width:100%;
    padding: 30px;
   // ${mobile({marginLeft:'0px',marginRight:'0px'})}
`

const Image=styled.img`
    object-fit: contain;
    margin-top: 20px;
    margin-bottom: 20px;
    width:100%;
    min-height:140px;
    max-height: 160px;
    transition: tranform 0.1s ease-out; 
    ${mobile({maxHeight:'160px',width:'200px', marginTop:'0px'})}
`
const TrendsContainer=styled.div`
    padding:20px;
    margin:10px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:white;
    z-index: 1;
    min-height: 400px;
    height: 100%;
    width:300px;
    cursor: pointer;
    position: realtive;
    color:rgba(0,0,0,0.7);
    &:hover ${Image}
    {
       transform: scale(1.10);
       ${mobile({transform: 'scale(1.10)'})}
    };
    ${mobile({padding:'15px',maxHeight:'300px'})}

`
const Offer =styled.span`
    background-color: red;
    color:white;
    padding:10px;
    position: absolute;
    top: 0px;
    ${mobile({padding:'10px'})}
 
`
const TrendsTitle=styled.p`
    font-weight: 400;
    font-size: 18px;
    font-family: 'Roboto';    
    text-align: justify;
    margin-bottom: 20px;
    line-height: 30px;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
     ${mobile({fontSize:'16px'})}
`

const TrendsInfoContainer=styled.div`
    display:flex;   
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px;  
    width:100%;

`

const TrendsPrice=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap:5px;
    margin-bottom: 15px;
    ${mobile({marginBottom:'6px', gap:'3px',fontSize:'16px'})}
`

const Button=styled.button`
    border: 1px solid grey;
    padding:10px;
    border-radius: 5px;
    background-color: white;
    color: rgb(83, 76, 76);
    cursor: pointer;
    height: 40px;
    width:100px;
    ${mobile({height:'30px', width:'100px',lineHeight:'10px',fontSize:'0.75rem'})}
    
`

/***********   END OF TRENDS STYLING   **************/

export {BannerContainer,BannerImage,
        HomeContainer,Title,CategoriesWrapper,LeftSection,RightSection,AllContainer,DealsWrapper,SignInAlertBox,Text,SignInButton,
        TrendsContainer,TrendsInfoContainer,TrendsTitle,TrendsPrice,Button,Image,Offer}