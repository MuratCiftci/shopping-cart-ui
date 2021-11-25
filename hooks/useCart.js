
import  { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
   
    const ctx = useContext(CartContext)

    return {
        ...ctx
    }
}