import { Route, Routes } from 'react-router-dom';
import React from 'react';
import ShopChild from '../shop-children/ShopChild';
import EachCategory from '../each-category/EachCategory';
import './shop.styles.scss'

export default function Shop() {
    
    
  return (
    <Routes>
      <Route index element = {<ShopChild />} />
      <Route path=':category' element = {<EachCategory />} />
    </Routes>
  )
}
