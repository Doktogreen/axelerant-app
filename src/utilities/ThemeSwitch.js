import React from "react";
import { StyledThemeBtn, StyledThemeTrack } from "./StyledComponents";

const ThemeSwitch = ({ theme, setTheme }) => {

  // Theme dark, and light swithcher for future usage
  const themeToggler = (e) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  let themeicon;
  if (theme === "light") {
    themeicon = <div>On</div>;
    // themeicon = <WbSunny style={{ fontSize: 14 }} />;
  } else {
    themeicon = <div>Off</div>;
    // themeicon = <Brightness3 style={{ fontSize: 14 }} />;
  }

  return (
    <div className="themeSwitch">
      <StyledThemeTrack className="themeTrack"></StyledThemeTrack>
      <StyledThemeBtn className="themeBtn" onClick={(e) => themeToggler(e)}>
        <div className="themeIcon">{themeicon}</div>
      </StyledThemeBtn>
    </div>
  );
};

export default ThemeSwitch;
