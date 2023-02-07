import React from 'react';
import { NavbarContainer,NavList,NavBarLink} from './style';
//import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
    //const [showNavbar,setShowNavbar]=useState(false)
    return (
        <NavbarContainer>
            {/*
            <NavButton>
                   <GiHamburgerMenu onClick={()=>{setShowNavbar(showNavbar=>!showNavbar)}} />       
            </NavButton> 
    */}       
             <NavList>
                                           
                    <NavBarLink to='/' >Home</NavBarLink>
                    <NavBarLink to='/products'   >All Products</NavBarLink>
                    <NavBarLink to='cart'  >Cart</NavBarLink>                    
                </NavList>  
            
      </NavbarContainer>
    ) 
}

export default Navbar;
