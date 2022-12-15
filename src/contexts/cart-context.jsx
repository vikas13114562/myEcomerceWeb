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

const removeItem = (cartItems, itemToRemove) => {
   
    const isExist = cartItems.find((ele) => ele.id === itemToRemove.id);
  
    if (isExist.quantity === 1) {
      return cartItems.filter(ele => (ele.id !== itemToRemove.id))
    }

    let newArr = cartItems.map(ele => {
        if(ele.id === itemToRemove.id) return {...ele, quantity:ele.quantity -1}
        return ele
    }) 
    return newArr
    
  };

  const removeTotally = (cartItems, item) => {
    const isExist = cartItems.find((ele) => ele.id === item.id);
  
    if (isExist) {
      return cartItems.filter(ele => (ele.id !== item.id))
    }
  }

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  totalItem:0,
  removeFromCart:() =>{},
  remove:()=>{},
  totalPrice:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)

  const addToCart = (itemToAdd) => {
    setCartItems(addItem(cartItems, itemToAdd)); 
  };
  const removeFromCart = (itemToRemove) => {
    setCartItems(removeItem(cartItems, itemToRemove)); 
  };

  const remove = (item) => {
    setCartItems(removeTotally(cartItems, item))
  }

  useEffect(() => {
    let tempPrice = 0;
    let cnt = 0;
    cartItems.map(ele => {
        tempPrice += ele.quantity*ele.price
        cnt += ele.quantity;
        return ele;
    })
    setTotalItem(cnt);
    setTotalPrice(tempPrice)
    
  }, [cartItems])

  const value = { isCartOpen, setIsCartOpen, cartItems, addToCart,
     totalItem, removeFromCart, remove, totalPrice,setCartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
