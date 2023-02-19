
const FilterReducer=(state,action)=>{  

    switch(action.type)   

    {
     
        case 'FILTER BY CATEGORY':
            return {...state,category:action.payload}    
        case 'FILTER BY PRICE RANGE':
           return {...state,maxPrice:action.payload}   
        case 'SORT BY PRICE':            
            return {...state, sort:action.payload }         
        case 'FILTER BY SEARCH':
            return {...state,searchText:action.payload}    
        case 'FILTER BY RATING':
            return {...state,rating:action.payload}    
        
        
        case 'CLEAR FILTERS':
            return {     
                            sort:'asc',
                            searchText:'',
                            category:'all',
                            price:'',
                            maxPrice:0
                   }          
        default:
           return state;
    }
}
export default FilterReducer;