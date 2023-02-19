import React from 'react';
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
import { Context } from '../../Context/Context';


const Header = () => { 
    const {user}=useContext(ProdContext) 
    const {filterState:{searchText},filterDispatch}=useContext(Context)
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
   
   
    return (
        <HeaderContainer>
            <LeftWrapper>
              <Logo>eShop</Logo>
                 <SearchBox > 
                    <Form >             
                      <Input type='search' value={searchText} onChange={(event)=>{filterDispatch({type:'FILTER BY SEARCH',
                                    payload:event.target.value})}
                                }/>
                <SearchButton>
                    <HiOutlineSearch size={20} type='button' />
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