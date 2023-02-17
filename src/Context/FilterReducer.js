const FilterReducer=(state,action)=>{
    switch(action.type)
    {
        case 'FILTER BY CATEGORY':
            return {...state,category:action.payload}
        case 'FILTER BY PRICE RANGE':
           return {...state,maxPrice:action.payload}      
        case 'FILTER BY SEARCH':
            return {...state,searchText:action.payload}    
        case 'FILTER BY RATING':
                return {...state,rating:action.payload}    
        case 'SORT ASC':
            return {...state,sort:action.payload}
        case 'SORT DESC':
            return {...state,sort:action.payload}  
        case 'CLEAR FILTERS':
            return {        sort:null,
                            rating:0,
                            searchText:'',
                            category:'',
                            price:'',
                   }          
        default:
           return state;
    }
}
export default FilterReducer;