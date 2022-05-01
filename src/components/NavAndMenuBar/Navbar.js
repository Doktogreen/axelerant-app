import React from "react";
import { StyledNavbar } from "../../utilities/StyledComponents";
// import ThemeSwitch from "./ThemeSwitch";
import { StyledHamburgerIcon } from "../../utilities/StyledComponents";
import { Link } from "react-router-dom";

const Navbar = ({
  theme,
  // setTheme,
  setNavmenuShowing,
  isNavmenuShowing,
  cartIsShowing,
  setCartIsShowing
}) => {
  let hamburgerClass;

  const showOrHideNavmenu = () => {
    if (cartIsShowing) {
      setCartIsShowing(!cartIsShowing);
    }
    setNavmenuShowing(!isNavmenuShowing);
  };
  isNavmenuShowing ? (hamburgerClass = "is-active") : (hamburgerClass = "");

  return (
    <StyledNavbar value="hello" className="navBar">
      <div theme={theme} className="nav-item hamburgerAreaContainer">
        <button
          onClick={() => {
            showOrHideNavmenu();
          }}
          className={`nav-item hamburger--spin hamburger2 ${hamburgerClass}`}
          type="button"
          style={{
            backgroundColor: "transparent",
            border: "none"
          }}
        >
          <span className="hamburger-box">
            <StyledHamburgerIcon className="hamburger-inner"></StyledHamburgerIcon>
          </span>
        </button>
      </div>
      <div className="nav-item logo">
        <img 
          className="nav-item"
          src="https://res.cloudinary.com/skiltime/image/upload/v1650533026/logo_qgad4z.png" 
          alt="logo" 
        />
      </div>
      <span className="nav-item logout-switch">
        {/* <ThemeSwitch theme={theme} setTheme={setTheme} /> */}

        <div className="nav-item mobileNavItem">
        <img 
          className=""
          src="https://res.cloudinary.com/skiltime/image/upload/v1650529449/logout_lk0gd1.png" 
          alt="logout" 
        />
      </div>
      </span>
      
      <nav>
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-link" to="/">
          Events
        </Link>
        <Link className="nav-link" to="/">
          Help
        </Link>
        <Link className="nav-link" to="/">
          Logout
        </Link>
      </nav>
      
    </StyledNavbar>
  );
};

export default Navbar;
