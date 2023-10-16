import styled from "styled-components"
import { mobile } from "../../Responsive";

     export const InfoContainer = styled.div`
                opacity:0;
                font-weight: 600;
                position: absolute;
                top:0;
                left:0; 
                width: 100%;
                height:100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: rgba(0,0,0,0.1);
                transition: all 0.5s ease;
                color:rgba(0,0,0,0.7);
                ${mobile({ padding: "1" })}
        `
        

        export const CategoriesContainer = styled.div`
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items:center;
                height: 400px;
                width: 250px;
                margin:20px;
                padding:10px;
                background-color: white;
                position: relative;  
                border:none;
                outline: none;
                &:hover ${InfoContainer}
                {
                    opacity: 1;                      

                }
                ${mobile({height:'240px', width:'170px',margin:'6px'})}
               

        `
        

        export const CategoryTitle=styled.h3`
                font-weight: 400;
                font-size: 17px;
                text-transform:uppercase;
                margin:20px;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                ${mobile({fontSize:'14px',margin:'20px 0px'})}

        `
        

        export const Image=styled.img`
                object-fit: cover; 
                width: 100%;
                height: 80%;
                ${mobile({height:'70%', width:'80%'})}


        `
        

        export const Button = styled.button`       
                border: none;
                padding:10px;
                border-radius: 5px;
                background-color: white;
                color: rgb(83, 76, 76);
                cursor: pointer;
                height: 50px;
                width:100px; 
                ${mobile({height:'30px', width:'100px',fontSize:'0.90rem'})}
       
        `

   
 