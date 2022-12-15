import React, {useContext,useEffect} from 'react'
import './thanks.css'
import { CartContext } from '../../contexts/cart-context'

export default function Thankyou() {
  const {setCartItems} = useContext(CartContext);

  useEffect(()=> {
    setCartItems([])
  },[])
  
  return (
    <div className='thanks'>
      <h1>Thank You</h1>
    </div>
  )
}
