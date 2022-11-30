import { ReactComponent as Bag } from '../../img/shopping-bag.svg';
import './cart-icon.styles.scss'
import React, {useContext} from 'react'
import { CartContext } from '../../contexts/cart-context';

export default function CartIcon() {

    const {isCartOpen, setIsCartOpen,totalItem} = useContext(CartContext);
    


    function toggleCart() {
        setIsCartOpen(!isCartOpen)
    }
  return (
    <div className='cart-icon-container' onClick={toggleCart}>
        <Bag className= "shopping-icon" />
        <span className='item-count'>{totalItem}</span>

    </div>
  )
}
