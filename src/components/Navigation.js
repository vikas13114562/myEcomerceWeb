import React, { useContext } from "react";

import { CartContext } from "../contexts/cart-context";

import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Clogo } from "../img/crown.svg";

import CartIcon from './cart/CartIcon'
import CartDropdown from './cart-dropdown/CartDropdown'
import "./navigation.styles.scss";

import { UserContext } from "../contexts/user.context";

import { signOutUser } from '../utils/firebaseUtils/Firebase'

export default function Navigation() {
  const { currUser, setCurrUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

  
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Clogo className="logo" />
        </Link>
        <div className="nav-links-container">
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
