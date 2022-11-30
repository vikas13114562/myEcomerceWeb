import { createContext, useState, useEffect } from "react";

const addItem = (cartItems, itemToAdd) => {
   
  const isExist = cartItems.find((ele) => ele.id === itemToAdd.id);

  if (isExist) {
    let newArr = cartItems.map(ele => {
        if(ele.id === itemToAdd.id) return {...ele, quantity:ele.quantity +1}
        return ele
    }) 
    return newArr
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  totalItem:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);

  const addToCart = (itemToAdd) => {
   
    setCartItems(addItem(cartItems, itemToAdd));
    
  };

  useEffect(() => {
    let cnt = 0;
    cartItems.map(ele => {
        cnt += ele.quantity;
        return ele;
    })
    setTotalItem(cnt);
    
  }, [cartItems])

  const value = { isCartOpen, setIsCartOpen, cartItems, addToCart, totalItem };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
