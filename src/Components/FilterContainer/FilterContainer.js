import React from 'react';
import { Container,Filter,FilterColor,FilterTitle,SelectBox,Span } from './FilterContainerStyles';

const FilterContainer = () => {   
   
    const sizeOptions=['S','M','L','XL']
 
/*
    const handleChange=(event)=>{
        setSize(event.target.value)
        console.log(event.target.value)
    }
    const selectSize=(id)=>{
        setSize(event.target.value)
        console.log(event.target.value)
    }
    */
    return (
        <Container>
            <Filter>
                    <FilterTitle>Color</FilterTitle> 
                    <Span>                        
                        <FilterColor color='blue' value='blue'/>    
                        <FilterColor color='red' value='red'/>   
                        <FilterColor color='green' value='green'/>       
                     </Span>
                              
            </Filter>

             <Filter>
                    <FilterTitle >Size </FilterTitle> 
                    <SelectBox >   
                            {sizeOptions.map(item=>{return <option value={item}  key={item}>{item}</option>})}                                               
                                                          
                </SelectBox>

             </Filter>           
        </Container>
    );
}

export default FilterContainer;
