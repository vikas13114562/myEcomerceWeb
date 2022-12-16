import React, { useContext } from "react";

import { CartContext } from "../contexts/cart-context";

import { Outlet, Link } from "react-router-dom";

import CartIcon from './cart/CartIcon'
import CartDropdown from './cart-dropdown/CartDropdown'
import "./navigation.css";

import { UserContext } from "../contexts/user.context";

import { signOutUser } from '../utils/firebaseUtils/Firebase'

export default function Navigation() {
  const { currUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

  
  return (
    <>
      <div className="navigation">
        
        <Link className="logo-container" to="/">
          <div className="logo-text">
            <h5>Click to Cart</h5>
            
          </div>  
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/login">
              SIGN IN
            </Link>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
          
        </div>
        
        
      </div>
      <Outlet />
    </>
  );
}
