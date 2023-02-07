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




const Header = () => {
 
    const {user,products,setProducts}=useContext(ProdContext) 
    const [searchText,setSearchText]=useState('')
    //const [filteredItems,setFilteredItems]=useState(products)
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

    const searchItem=()=>{         
     
        const editSearchText=searchText.toLowerCase();
        if (editSearchText!=='')
        {
       
           let updatedItems=products.filter((item,index)=>{return item.title.toLowerCase().includes(editSearchText)})           
            setProducts(updatedItems)
        }
        else
        {
            setProducts(products)
        }
      
           // navigate(`/products/title/${searchText} `)
                    
     }


    
    return (
        <HeaderContainer>
            <LeftWrapper>
                    <Logo>eShop</Logo>
                    <SearchBox > 
                        <Form>             
                            <Input type='search' value={searchText} onChange={(event)=>setSearchText(event.target.value)}/>
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