import React,{createContext, useReducer} from 'react';
import FilterReducer from './FilterReducer';

export const FilterContext=createContext()
    const FilterContextProvider = ({children}) => { /*   
    const sortAsc=(event)=>{
        filterDispatch({type:'SORT ASCENDING',payload:event.target.value})
    }

    const sortDsc=(event)=>{
        filterDispatch({type:'SORT DESCENDING',payload:event.target.value})
    }
   */
    const [filterState,filterDispatch]=useReducer(FilterReducer, {
                                                                    sort:null,
                                                                    rating:0,
                                                                    searchText:'',
                                                                    category:'',
                                                                    price:'',

                                                        })
                                                      
     return (
            <div>
                <FilterContext.Provider value={{filterState,filterDispatch}}>    
                        {children}
                </FilterContext.Provider>
            </div>
        );
}

export default FilterContextProvider;



