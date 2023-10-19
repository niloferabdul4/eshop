import React, { useContext } from 'react';
import Banner from './Banner';
import categories_data from '../../Components/Categories/categories_data';
import CategoryItem from '../../Components/Categories/CategoryItem';
import { useNavigate } from 'react-router-dom';
import {HomeContainer,CategoriesWrapper,LeftSection, AllContainer,Title,RightSection,SignInAlertBox,Text,SignInButton} from './style.js';
import { CategoryTitle } from '../../Components/Categories/style';
import {InfoContainer,Button} from '../../Components/Categories/style';
import { Image } from '../../Components/Categories/style';
import TrendsProducts from './TrendsProducts';
import { ProdContext } from '../../Context/ProdContext';
import { Context } from '../../Context/Context';
import Products from '../Products/Products';


const Home = () => {

    const navigate=useNavigate();
    const {products}=useContext(ProdContext)
    const {filterState:{searchText}}=useContext(Context)

    const filteredProd=()=>{
        let updatedProd=products;
        if(searchText)
        {       
         updatedProd=updatedProd.filter(item=>item.title.toLowerCase().includes(searchText))
        }
        return updatedProd;
    }
   
     return(     <>    
       
        <HomeContainer>               
            <Banner />
         {searchText &&<Products/>}
   {/*************  Categories Section ************** */}

            <Title>Categories</Title>  
            <CategoriesWrapper> 
                <LeftSection>                 
                {categories_data.map(item=>{return <CategoryItem key={item.id} categoryItem={item}                                                                          
            
            />})} 
               </LeftSection> 
                <RightSection>

                <AllContainer role='button'  onClick={()=>{navigate(`/products`)}}>               
                        <CategoryTitle> All Products</CategoryTitle>
                        <Image src='https://akns-images.eonline.com/eol_images/Entire_Site/202278/rs_1024x759-220808151259-1024-ecomm-back-to-school.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top'  alt=''/>                  
                        <InfoContainer>                          
                            <Button>SHOP NOW</Button>
                        </InfoContainer>                              
                    </AllContainer> 

                    <SignInAlertBox>                   
                        <Text>                        
                             Sign in for the best experience                                                                                          
                        </Text>                             
                            <SignInButton onClick={()=>navigate('/login')}>Sign in securely </SignInButton>                                                                 
                    </SignInAlertBox> 

                       
                </RightSection>
            </CategoriesWrapper>
            
                <TrendsProducts /> 
           
            
       </HomeContainer>  
        
    </>        
    );
}

export default Home;
