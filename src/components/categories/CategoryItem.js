import React from 'react'
import { useNavigate } from 'react-router-dom'
import './categories.styles.scss'

export default function CategoryItem(props) {

  const navigate = useNavigate()

  const navigateHandler = () => navigate(props.ele.route)
   
  return (
    <>
        <div className='category-container' onClick={navigateHandler}>
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
