import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { mobile } from "../../Responsive"

const NavbarContainer=styled.div`
        height:40px;
        background-color: lightgray;
        display: flex;
        flex-direction: row;
        background: transparent;
        position: sticky;       
               
`
/*
const NavButton=styled.div`    
        visibility:hidden;
        display:flex;
        padding:10px;
        justify-content:center;
        align-items:center;
        font-size:20px;
        margin:10px;
        color:#404040;
        ${mobile({visibility:'visible'})}

`
*/
const NavList=styled.div`
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding:10px;
        margin-left:20px;
        color: #2874f0;
        gap:10px;
        
`

const NavBarLink=styled(NavLink)`
        margin-right:50px;
        text-decoration: none;
        align-items: none;
        font-size: 18px;
        color: black;
        cursor:pointer;
        ${mobile({ fontSize:'16px',marginRight:'20px' })}
     
`

export {NavbarContainer,NavList,NavBarLink}
      
