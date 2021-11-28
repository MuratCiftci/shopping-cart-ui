
import  { useContext } from 'react';
import { ProductsContext } from '../context/ProductContext';

export const useProducts = () => {
   
    const ctx = useContext(ProductsContext)

    return {
        ...ctx
    }
}