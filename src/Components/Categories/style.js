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
                ${mobile({ padding: "10px" })}
        `
        

        export const CategoriesContainer = styled.div`
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items:center;
                height: 350px;
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
                ${mobile({height:'250px', width:'180px'})}

        `
        

        export const CategoryTitle=styled.h3`
                font-weight: 400;
                font-size: 18px;
                text-transform:uppercase;
                margin:20px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                ${mobile({fontSize:'14px',marginBottom:'20px'})}

        `
        

        export const Image=styled.img`
                object-fit: cover; 
                width: 80%;
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
                ${mobile({height:'30px', width:'50px'})}
       
        `

   
 