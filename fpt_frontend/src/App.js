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
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import LoginModal from './Components/LoginModel/LoginModel'; // Updated import path

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const [active, setActive] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [isLogin, setIsLogin] = useState(true);

  const global = useGlobalContext();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${isDarkMode ? "#333" : "#fff"};
      color: ${isDarkMode ? "#fff" : "#333"};
      overflow-y: auto; /* Enable body scrolling when content exceeds viewport */
    }
  `;

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      case 5:
        return <Summary />;
      case 6:
        return <Help />;
      default:
        return <Dashboard />;
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppContainer>
      <Header isDarkMode={isDarkMode} />
      {orbMemo}
      <MainLayout>
        <TopRightCorner>
          <Switch
            onChange={toggleDarkMode}
            checked={isDarkMode}
            onColor="#333" // Customize the switch colors as needed
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
        <MainContent>
          {displayData()}
        </MainContent>
      </MainLayout>
      <Footer />
      <GlobalStyle />
      <ToggleForm>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Sign Up</button>
      </ToggleForm>
      {isLogin ? <Login /> : <Signup />}
      <LoginModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onLoginSuccess={handleLoginSuccess} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Set a minimum height to fill the viewport */
`;

const MainContent = styled.main`
  flex: 1; /* This ensures the main content fills the available space */
`;

const TopRightCorner = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  z-index: 999;
`;

const ToggleForm = styled.div`
  /* Styling for the form toggle buttons */
`;

const GlobalStyle = createGlobalStyle`
  /* Global styles */
`;

export default App;
