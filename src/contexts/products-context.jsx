import { createContext,useState,useEffect } from "react";
// import Products_Data from '../shop-data.json'
import {getCollectionsAndDocuments} from '../utils/firebaseUtils/Firebase'
// import SHOP_DATA from '../shop-data'

export const ProductsContext = createContext({
    categoriesMap:{},
})

export const ProductsProvider = ({children}) => {

    useEffect(() => {
        const getCategories = async() => {
            const catMap = await getCollectionsAndDocuments();
            setCategoriesMap(catMap)
        }
        getCategories()
    },[])
   
    const [categoriesMap, setCategoriesMap] = useState({})

    const value = {categoriesMap}

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}

