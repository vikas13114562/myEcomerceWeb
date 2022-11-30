import React, {useContext} from 'react'
import Button from '../../button/Button'
import './product-card.styles.scss'

import { CartContext } from '../../contexts/cart-context'

export default function ProductCard({products}) {

    const {addToCart} = useContext(CartContext)

    const addProductToCart = () => addToCart(products)

    const {name, price, imageUrl} = products
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt = {name} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType = "inverted" onClick = {addProductToCart}>Add to card</Button>
    </div>
  )
}
