import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((cartItem) => {
      //loops thru cart array
      count += cartItem.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <>
      <nav className="navbarContent">
        <div className="logoTitleNav">
          <img src="/egg.png" alt="logo" width="50px" />
          <h1>The Naked Egg</h1>
        </div>

        <Link to="/" className="homeNav navLinks">
          Home
        </Link>
        <Link to="/ourstory" className="storyNav navLinks">
          Our Story
        </Link>
        <Link to="/productoverview" className="productsNav navLinks">
          Our Products
        </Link>
        <Link to="/cart" className="basketNav navLinks">
          Basket<i className="ri-shopping-basket-line"></i>&nbsp;{cartCount}
        </Link>
        <Link to="/login" className="loginNav navLinks">
          Login
        </Link>
        
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
