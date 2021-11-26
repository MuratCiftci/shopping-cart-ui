import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "./CartReducer";
import { useEffect } from "react";
import { getCookie } from "../lib/useCookie";
const cart = getCookie("cart");
export const CartContext = createContext();



const initialState = {
  cartItems: cart,
  ...sumItems(cart),
  checkout: false,
};

const CartContextProvider = ({ children }) => {
  // Perform localStorage action

  const [state, dispatch] = useReducer(CartReducer, initialState);
  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    console.log("CHECKOUT", state);
    dispatch({ type: "CHECKOUT" });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
