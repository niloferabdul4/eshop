import React from 'react';
import { createContext,useState } from 'react';
export const ProdContext=createContext()           // create & export ProdContext //


/*   ---------Steps--------

1. Create a context (ProdContex)
2. Initialise the products by using useState
3. Return the Context  & provide the products as a value
4. Return the children

*/


const ProdContextProvider = ({children}) => {
 
    const [products,setProducts]=useState([])
    const [modal,setModal]=useState(false)
    const [user,setUser]=useState(null)
   
    const toggleModal=()=>{
        setModal(prevModal=>!prevModal)
      }

    return (   

     <div>
     <ProdContext.Provider value={{ products,setProducts,modal,setModal,user,setUser,toggleModal}}>
           {children}
        </ProdContext.Provider>
        </div>
    );
}

export default ProdContextProvider;

