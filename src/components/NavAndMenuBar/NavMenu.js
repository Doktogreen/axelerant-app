import React from "react";
import { Link } from "react-router-dom";
import { StyledNavMenu } from "../../utilities/StyledComponents";

const NavMenu = () => {
  return (
    <div className="navMenuDropdown">
      <StyledNavMenu className="navMenu">
        <Link className="navMenuLI" to="/dashboard">
          Dashboard
        </Link>
        <Link className="navMenuLI" to="/">
          Events
        </Link>
        <Link className="navMenuLI" to="/">
          Help
        </Link>
      </StyledNavMenu>
    </div>
  );
};

export default NavMenu;
