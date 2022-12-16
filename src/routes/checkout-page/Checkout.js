import React, {useContext} from 'react'
import './checkout.styles.scss'
import { CartContext } from '../../contexts/cart-context'
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import Button from '../../button/Button';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {

    const navigate = useNavigate()
    const {cartItems, totalPrice} = useContext(CartContext);
  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            
        </div>
        {cartItems.map(ele => {
            return(
                <CheckoutItem cartItem={ele} key = {ele.id} />
            )
        })}
        <div className='payment-container'>
            <Button buttonType={"google"} children = "Pay Now" onClick = {()=>(navigate('/thanks'))} />
            <span className='total'>Total : &#x20B9; {totalPrice}</span>
        </div>
    </div>
  )
}
