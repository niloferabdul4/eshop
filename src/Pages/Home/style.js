import styled from "styled-components";
import {InfoContainer} from '../../Components/Categories/style';
import { mobile } from "../../Responsive";
import { tab } from "../../Responsive";
/************  BANNER STYLING    ****************/


const BannerContainer=styled.div `
    display: flex;
    justify-content: center;    
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    ${mobile({ flex:0.2,width:'100%'})}
`

const BannerImage=styled.div `
    z-index: -1;
    margin-bottom: -400px;
    mask-image: linear-gradient(to bottom,rgb(0,0,0,1),rgb(0,0,0,0));    /* opacity bottom */
    ${mobile({ marginBottom: '-60px'})}
    ${tab({ marginBottom: '-100px'})}
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
    ${mobile({padding:'0px',width:'100%' ,margin:'0px'})}
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
    margin: 25px 20px 25px 20px;  
    width  :100% ;
    padding: 20px 100px;
    ${mobile({flexDirection:"column",alignItems:'center',padding:'6px 0px', margin:'20px 0px 20px 0px',width:'100%'
   })}
  ${tab({flexDirection:"column",alignItems:'center',padding:'6px 10px', margin:'30px 0px',width:'100%'
   })}

`
const LeftSection=styled.div`
    flex:0.8%;   
    display:flex;
    flex-direction: row;
    ${mobile({ display: 'grid',
    flex:'1',
    gridTemplateColumns: 'repeat(2,1fr)',
    gridColumnGap:'15px',
    gridTemplateRows: 'repeat(2,1fr)',gridRowGap:'10px',
    margin:'1em 0.2em'})}
      ${tab({margin:'0px',flex:'1'})} 
    
`

const AllContainer=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: 320px;
    width: 400px;
    margin:20px 60px;
    padding:0px;
    background-color: white;
    position: relative;  
    border:none;
    outline: none;
    &:hover ${InfoContainer}
        {
          opacity: 1;           

        }
        ${mobile({height:'250px',width:'320px',margin:'1em 2em'})}
        ${tab({height:'350px',width:'380px',margin:'2em 2em'})}
        `

const RightSection=styled.div`
    flex:0.2%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    //margin-right: 50px;
    ${mobile({ display: 'flex',flexDirection:'column' ,justifyContent:'center'})}
    ${tab({flex:'1' })}

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
        ${mobile({height:'30px',fontSize:'0.85rem',margin:'10px auto'})} 
            
        
`  
const SignInAlertBox=styled.div`
        display: flex;
        flex-direction: column; 
        justify-content:center;
        border:none;
        margin: 20px 60px;
        padding: 20px;
        max-height: 30vh;
        border-radius: 8px;
        background-color: white;
        gap:15px;
        ${mobile({ padding:'15px',gap:'15px',margin:'30px'})}   
        ${tab({ padding:'20px',gap:'20px',margin:'40px'})}   
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
    margin: 30px;
    z-index: 1;  
    width:100%;
    padding: 30px;
    ${mobile({ margin:'20px 0px',padding:' 8px 0px',width:'100%'})}   
     ${tab({ margin:'35px 0px',padding:'8px 0px',width:'100%'})}    
`

const Image=styled.img`
    object-fit: contain;
    margin-top: 20px;
    margin-bottom: 20px;
    width:100%;
    min-height:140px;
    max-height: 160px;
    transition: tranform 0.1s ease-out; 
    ${mobile({maxHeight:'100px',width:'120px', marginTop:'8px'})}
     ${tab({maxHeight:'100px',width:'110px', marginTop:'8px'})}
`
const TrendsContainer=styled.div`
    padding:30px 20px;
    margin:10px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:white;
    z-index: 1;
    max-height: 500px;
    height: 500px;
    width:310px;
    cursor: pointer;
    position: realtive;
    color:rgba(0,0,0,0.7);
    &:hover ${Image}
    {
       transform: scale(1.10);
       ${mobile({transform: 'scale(1.10)'})}
    };
    ${mobile({padding:'10px 8px',maxHeight:'330px',width:'180px',marginLeft:'3px'})}
     ${tab({maxHeight:'360px',width:'260px',marginLeft:'4px'})}

`
const Offer =styled.span`
    background-color: red;
    color:white;
    padding:10px;
    position: absolute;
    top: 0px;
    border-radius: 6px;
    ${mobile({padding:'5px',fontSize:'13px'})}
 
`
const TrendsTitle=styled.p`
    font-weight: 400;
    font-size: 18px;
    font-family: 'Roboto';    
    text-align: justify;
    margin-bottom: 20px;
    line-height: 1.5;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
     ${mobile({fontSize:'14px',marginBotton:'10px'})}
      ${mobile({fontSize:'16px',marginBotton:'16px'})}
`

const TrendsInfoContainer=styled.div`
    display:flex;   
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px;  
    width:100%;
    ${mobile({margin:'0px',padding:'0px'})}

`

const TrendsPrice=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap:5px;
    margin-bottom: 15px;
    ${mobile({marginBottom:'6px', gap:'3px',fontSize:'12px'})}
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
    ${mobile({display:'none'})}
    
`

/***********   END OF TRENDS STYLING   **************/

export {BannerContainer,BannerImage,
        HomeContainer,Title,CategoriesWrapper,LeftSection,RightSection,AllContainer,DealsWrapper,SignInAlertBox,Text,SignInButton,
        TrendsContainer,TrendsInfoContainer,TrendsTitle,TrendsPrice,Button,Image,Offer}