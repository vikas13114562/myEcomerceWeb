import React from 'react'
import './categories.styles.scss'

export default function CategoryItem(props) {
   
  return (
    <>
        <div className='category-container'>
            <div className='background-image' style={{
                backgroundImage: `url(${props.ele.imageUrl})`
            }} />
            <div className='category-body-container'>
                <h2>{props.ele.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    </>
  )
}
