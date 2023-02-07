import React from 'react';
import { CategoriesContainer,CategoryTitle,Image,InfoContainer,Button} from './style';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({categoryItem}) => {  
    const navigate=useNavigate();

    return (       
        
             <CategoriesContainer role='button'  onClick={()=>{ navigate(`/products/category/${categoryItem.category}`)}}>               
                        <CategoryTitle> {categoryItem.title}</CategoryTitle>
                        <Image src={categoryItem.image}  alt=''/>                  
                        <InfoContainer>                          
                            <Button>SHOP NOW</Button>
                        </InfoContainer>                              
            </CategoriesContainer>           
            
    );
}

export default CategoryItem;
