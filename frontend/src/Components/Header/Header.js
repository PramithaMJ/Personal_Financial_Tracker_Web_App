import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../../hook/useLogout";
import { useAuthContext } from "../../hook/useAuthContext";
import facIcon from '../../img/pft-icon.png'

const Header = ({ isDarkMode }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <HeaderStyled isDarkMode={isDarkMode}>
      <div className="content">
      <h1 className={isDarkMode ? "dark-mode-text" : ""}>
      <img src={facIcon} alt="PFT Icon" className="w-8 h-8 inline-block mr-2" />

Welcome to the Personal Finance Tracker
</h1>

        <nav>
        <div className="flex justify-center">
          <ul>
          
            <li>Home</li>
            <Link to="/home">Dashboard</Link>
            <Link to="/about" className="text-blue-800 hover:text-red-500">About</Link>
            <li>Contact</li>
            <div className="mt-4">
         
        </div>
          {user && (
            <div>
              <span className="space-x-10 m-5">{user.email}</span>
              <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Log out
              </button>

            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
              )}
          </ul>
          </div>
        </nav>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: ${(props) =>
    props.isDarkMode ? "#222" : "#fff"}; 
  color: ${(props) =>
    props.isDarkMode
      ? "#fff"
      : "#222"}; 
  padding: 20px 0;
  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dark-mode-text {
    color: #fff;
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
