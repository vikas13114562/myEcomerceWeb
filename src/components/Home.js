import React from 'react'
import Categories from './categories/Categories'
import SlideShow from './slideshow/SlideShow'
import './home.css';
export default function Home() {
  return (
    <>
        <div className='slide-show-container'>
          <SlideShow />
        </div>
        <div className = "product-text" >
          <div>PRODUCT CATEGORIES</div>
          <span className='line'></span>
        </div>
        <Categories />
       
        
    </>
  )
}
