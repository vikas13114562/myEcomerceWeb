import React, {useContext} from 'react'
import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart-context'

export default function CheckoutItem({cartItem}) {

    const {remove, addToCart, removeFromCart} = useContext(CartContext)

    const removeHandler = () => remove(cartItem)
    const addToCartHandler = () => addToCart(cartItem)
    const removeFromCartHandler = () => removeFromCart(cartItem)

    const {name, price, quantity, imageUrl} = cartItem
  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt = {name} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeFromCartHandler}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addToCartHandler}>&#10095;</div>
            
            </span>
        <span className='price'>{price}</span>
        <div className='remove-button'  onClick={removeHandler} >&#10005;</div>
    </div>
  )
}
