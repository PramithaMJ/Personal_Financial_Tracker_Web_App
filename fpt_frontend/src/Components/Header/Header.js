import React from "react";
import styled from "styled-components";

const Header = ({ isDarkMode }) => {
  return (
    <HeaderStyled isDarkMode={isDarkMode}>
      <div className="content">
        <h1>Personal Finance Tracker</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: ${(props) => (props.isDarkMode ? "#222" : "#fff")}; // Change colors based on isDarkMode
  color: ${(props) => (props.isDarkMode ? "#fff" : "#222")}; // Change font color based on isDarkMode
  padding: 20px 0;
  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-size: 24px;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  nav ul li {
    font-size: 18px;
  }
`;

export default Header;
