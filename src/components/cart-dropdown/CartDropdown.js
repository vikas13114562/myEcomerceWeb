import React, {useContext} from 'react'
import './cart-dropdown.styles.scss'
import Button from '../../button/Button'
import CartItem from '../cart-tem/CartItem'

import { CartContext } from '../../contexts/cart-context'

import { useNavigate } from 'react-router-dom'

export default function CartDropdown() {

    const {cartItems,isCartOpen,setIsCartOpen} = useContext(CartContext)
    const navigate = useNavigate()

    function goToCheckoutPage() {
      navigate('/checkout')
      setIsCartOpen(!isCartOpen)
    }

  return (
    <div className='cart-dropdown-container'>
        {
            cartItems.length ===0?<h3>Cart is empty</h3> :<div className='cart-item'>
            {cartItems.map(ele => {
              return(
                  <CartItem cartItem = {ele} key = {ele.id} />
              )
            })}  
          </div>
        }
        
        <Button onClick = {goToCheckoutPage} >Go to checkout</Button>
        
    </div>
  )
}
