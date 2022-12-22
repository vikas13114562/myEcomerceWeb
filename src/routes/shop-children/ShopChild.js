import React, {useContext} from 'react'
import { ProductsContext } from '../../contexts/products-context'
import CategoryPreview from '../../components/categories-preview/CategoryPreview'


export default function ShopChild() {
    const {categoriesMap} = useContext(ProductsContext)
    
    
  return (
    <>
        {
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title]
            return(
              <CategoryPreview key={title} title = {title} products = {products} />
            )
          })
        }
    </>
  )
}
