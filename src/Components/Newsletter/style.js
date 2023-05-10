
import styled from "styled-components"
import { mobile } from "../../Responsive"

    export const NewsletterContainer=styled.div`
        padding:60px;
        width:100%;
        background-color:darkgrey;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:25vh;       
        ${mobile({ margin:'0px'})}
        `

    export const Title=styled.div`
        font-size: 24px;
        font-weight:600 ;
        margin: 20px;
        ${mobile({ fontSize:'18px'})}


        `

    export const Description=styled.div`
        font-weight: 400;
        font-size: 20px;
        ${mobile({ fontSize:'15px'})}

        `

    export const Wrapper=styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        gap:12px;
        margin: 20px;
        ${mobile({ flexDirection:'row',gap:'6px'})}


        `
    export const Input=styled.input`
        padding: 6px;
        width: 500px;
        height:40px;
        border-radius: 5px;
        border: none;
        ${mobile({ height:'30px',width: "100%" })}

        `
    export const Button=styled.button`
        padding: 10px;
        width: 150px;
        height:40px;
        border-radius: 5px;
        font-size: 1rem;
        border: none;
        ${mobile({ height:'30px',fontSize:'0.8rem'})}

        `

    export const Label=styled.label`
        padding: 10px;
        min-width: 300px;
        height:40px;
        background-color: lightgrey;
        font-size: 1rem;
        border: none;
        transition: all 0.5s ease;
        ${mobile({ fontSize: "0.85rem",minWidth:'150px' ,height:'30px',padding:'6px'})}
        `