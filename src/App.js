import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { 
  BrowserRouter as Router, 
  Route, Routes 
} from "react-router-dom";
import EventPage from "./components/Events/EventPage";
import UserPage from "./components/Dashboard/UserPage";
import Navbar from "./components/NavAndMenuBar/Navbar";
import UserContext from "./UserContext";
import NavMenu from "./components/NavAndMenuBar/NavMenu";
import "../src/utilities/assets/scss/styles.scss";
import "../src/utilities/assets/scss/hamburgers.scss";

const lightTheme = {
  body: "#5C524D",
  searchBoxBg: "#fff",
  searchBoxFont: "#212121",
  eventBtnBg: "#fff",
  eventBtnFont: "#FC732F",
  fontColor: "#fff",
  iconColor: "#212121",
  accent: "whitesmoke",
  accent2: "rgb(34, 44, 99)",
  borderColor: "rgb(34, 44, 99)",
  leftOrRight: "translateX(-10px);",
  shadow: "0px 2px 20px 4px rgb(218, 187, 187);",
  background: "#fff"
};

const darkTheme = {
  body: "rgb(34, 44, 99)",
  searchBoxBg: "rgb(34, 44, 99)",
  searchBoxFont: "#fff",
  eventBtnBg: "rgb(34, 44, 99)",
  eventBtnFont: "#FC732F",
  iconColor: "#212121",
  fontColor: "#fff",
  accent: "rgb(255, 227, 227)",
  accent2: "whitesmoke",
  borderColor: "#212121",
  leftOrRight: "translateX(10px);",
  shadow: "0px 2px 14px 0px rgb(34, 44, 99);",
  background: "rgb(34, 44, 99)"
};

export default function App() {
  const [theme, setTheme] = useState("light");
  const [isNavmenuShowing, setNavmenuShowing] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Navbar
            theme={theme}
            setTheme={setTheme}
            isNavmenuShowing={isNavmenuShowing}
            setNavmenuShowing={setNavmenuShowing}
          />
          {isNavmenuShowing ? (
            <NavMenu
              isNavmenuShowing={isNavmenuShowing}
              setNavmenuShowing={setNavmenuShowing}
            />
          ) : (
            <></>
          )}
          <Routes>
            <React.Fragment>
              <Route path="/" element={<EventPage/>}></Route>
            </React.Fragment>
            <React.Fragment>
              <Route path="/dashboard" element={<UserPage/>}></Route>
            </React.Fragment>
          </Routes>
        </ThemeProvider>
      </UserContext.Provider>
    </Router>
  );
}
