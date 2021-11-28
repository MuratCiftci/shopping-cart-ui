import React, { createContext, useState } from 'react';
export const ProductsContext = createContext()

const ProductsContextProvider = (props) => {
    const {value, children} = props

    return ( 
        <ProductsContext.Provider value={{value}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;

