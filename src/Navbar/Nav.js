import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="e-com_nav">
      <img
      src="https://e7.pngegg.com/pngimages/560/954/png-clipart-online-shopping-boutique-retail-ecommerce-food-retail-thumbnail.png" 
      className="logo"
      alt="" />
      {auth ? (
        <ul className="navbar">
          <li className="nav_li">
            <Link to="/">Product</Link>
          </li>
          <li className="nav_li">
            <Link to="/addproduct">Add Product</Link>
          </li>
          {/* <li className="nav_li">
            <Link to="/updateproduct">Update Product</Link>
          </li> */}

          <li className="nav_li">
            <Link to="/profile">Profile</Link>
          </li>

          <li className="nav_li">
            <Link to="/signup" onClick={logout}>
              Logout <p style={{fontSize:"15px"}}> ({JSON.parse(auth).name})</p>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navbar signin_login">
          <li className="nav_li">
            <Link to="/signup" >Sign Up</Link>
          </li>
          <li className="nav_li">
            <Link to="/login">LOG In</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
