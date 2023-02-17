import React,{useState} from 'react';
import ShoppingCart from './ShoppingCart';
import {HiOutlineSearch}from 'react-icons/hi'
import { useNavigate} from 'react-router-dom';
import { useContext,useEffect} from 'react';
import { ProdContext } from '../../Context/ProdContext';
import { auth } from '../../Context/Utils/firebase';
import {    HeaderContainer,
            LeftWrapper,
            SearchBox,
            Input,
            RightWrapper,
            Span,Form,
            Links,
            Logo,SearchButton
            } from './style';
import { FilterContext } from '../../Context/FilterContext';




const Header = () => {
 
    const {user,products,setProducts}=useContext(ProdContext) 
    const {filterState:{searchText},filterDispatch}=useContext(FilterContext)
       const navigate=useNavigate()    

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    useEffect(() => {

        if(!user){
           navigate('/')
        }

    }, [user])

    const searchItem=(event)=>{         
   
        filterDispatch({type:'FILTER BY SEARCH',
        payload:event.target.value})
      
       
    }
      
    return (
        <HeaderContainer>
            <LeftWrapper>
                    <Logo>eShop</Logo>
                    <SearchBox > 
                        <Form>             
                            <Input type='search' value={searchText} onChange={searchItem}/>
                            <SearchButton>
                                 <HiOutlineSearch size={20} onClick={searchItem} />
                            </SearchButton>
                            
                        </Form>
                    </SearchBox>
                 
          
            </LeftWrapper>
                
            <RightWrapper>
                    <Span>
                         <p>Hello.. {user?  ( `${user.email.split('@')[0]} `)  : ( 'Guest') }</p> 
                         <h4 onClick={handleAuthentication}>{user? 'Sign Out' : 'Sign In'}</h4>                       
                    </Span>
                    <Links to='register' >Register</Links>
                    <Links to ='login'  >Login</Links>
                    <ShoppingCart />                                            
            </RightWrapper> 
        </HeaderContainer>            
    
    );
}

export default Header;