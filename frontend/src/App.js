import styled, { createGlobalStyle } from "styled-components";
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import React, { useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import Switch from "react-switch";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/summary";
import Help from "./Components/Help/Help";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch as SwitchRouter,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/SignUp";
import History from "./Components/History/RecentHistory";
import Transaction from "./Components/Transaction/Transaction";
import FullHistory from "./Components/History/FullHistory";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const [active, setActive] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark mode

  const global = useGlobalContext();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${isDarkMode ? "#333" : "#fff"};
      color: ${isDarkMode ? "#fff" : "#333"};
      overflow-y: auto; 
    }
  `;

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard isDarkMode={isDarkMode} />;
      case 2:
        return <Transaction isDarkMode={isDarkMode} />;
      case 3:
        return <Income isDarkMode={isDarkMode} />;
      case 4:
        return <Expenses isDarkMode={isDarkMode} />;
      case 5:
        return <Summary isDarkMode={isDarkMode} />;
      case 6:
        return <FullHistory isDarkMode={isDarkMode} />;
      case 7:
        return <Help isDarkMode={isDarkMode} />;
      default:
        return <Dashboard isDarkMode={isDarkMode} />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <div>
        <AppContainer>
          <Header isDarkMode={isDarkMode} />
          {orbMemo}
          <MainLayout>
            <TopRightCorner>
              <Switch
                onChange={toggleDarkMode}
                checked={isDarkMode}
                onColor="#333" 
                onHandleColor="#fff"
                handleDiameter={25}
                uncheckedIcon={false}
                checkedIcon={false}
              />
              <span className="switch-label">
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </span>
            </TopRightCorner>
            <Navigation active={active} setActive={setActive} />
            <MainContent>{displayData()}</MainContent>
          </MainLayout>
          <Footer isDarkMode={isDarkMode} />
          <GlobalStyle />
        </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

const MainContent = styled.main`
  flex: 1; 
`;

const TopRightCorner = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  z-index: 999;
`;

const GlobalStyle = createGlobalStyle`
  /* Global styles */
`;

export default App;
