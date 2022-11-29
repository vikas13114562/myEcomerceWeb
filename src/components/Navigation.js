import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { ReactComponent as Clogo } from '../img/crown.svg'
import './navigation.styles.scss'

export default function Navigation() {
  return (
    <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
              <Clogo className = "logo" />
            </Link>
            <div className='nav-links-container'>
              <Link className='nav-link' to='/home' >
                Home
              </Link>
              <Link className='nav-link' to='/login' >
                SIGN IN
              </Link>
            </div>
           
        </div>
        <Outlet />
    </>
  )
}
