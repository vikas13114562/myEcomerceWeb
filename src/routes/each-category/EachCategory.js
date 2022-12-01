import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../contexts/products-context'
import ProductCard from '../../components/product-card/ProductCard';
import './each-category.styles.scss'

export default function EachCategory() {
    const {categoriesMap} = useContext(ProductsContext);
    const {category} = useParams();

    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    },[category, categoriesMap])


  return (
    <>
        <h2 className='each-category-title'>{category.toUpperCase()}</h2>
        <div className='each-category-container'>
        {
            products &&
            products.map(ele => {
                return(
                    <ProductCard  key={ele.id} products = {ele} />
                )
            })
        }
    </div>
    </>
    
  )
}
