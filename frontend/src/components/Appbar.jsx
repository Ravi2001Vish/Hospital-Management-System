import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Appbar.css";
import headerimg from "../react image/logo.png";
const Navbar = () => {


  const [logintoken] = useState(localStorage.getItem("token"));

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const loginav = useNavigate();
  return (<>
    

    <div
      style={{
        width: "100%",
        // backgroundColor: "rgba(157, 154, 154, 0.4)",
        backgroundColor:"white",
        position: "fixed",
        top: "0",
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <nav className="navbar">
          <div>
            <img src={headerimg} alt="nav img" width="100px" height="40px" />
          </div>
          <ul className="navbar-links">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/cart">DEPARTMENT</NavLink>
            </li>
            <li>
              <NavLink to="/OrdersDetails">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/products">OUR DOCTORS</NavLink>
            </li>
          

            <li>
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
            <li>
            </li>
            

            <div className="icndiv">
              {!logintoken && (
                <span
                  onClick={() => loginav("/login")}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  Login
                </span>
              )}
              {logintoken ? (
                <button onClick={logout} className="logoutbtn">
                  Logout{" "}
                </button>
              ) : (
                ""
              )}
            </div>
          </ul>
        </nav>
      </div>
    </div>
    
    </>
  );
};

export default Navbar;
