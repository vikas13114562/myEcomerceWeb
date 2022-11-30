import React, {useContext} from 'react'
import { ProductsContext } from '../../contexts/products-context'
import ProductCard from '../../components/product-card/ProductCard'
import './shop.styles.scss'

export default function Shop() {
    const {products} = useContext(ProductsContext)
  return (
    <div className='cards-container'>
        {products.map(ele => {
            return (
                <ProductCard key = {ele.id} products = {ele} />
            )
        })}
    </div>
  )
}
