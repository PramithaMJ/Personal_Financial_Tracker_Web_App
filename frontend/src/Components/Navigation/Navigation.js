import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { useAuthContext } from "../../hook/useAuthContext";
import { useLogout } from '../../hook/useLogout'

function Navigation({active, setActive}) {
    const { logout } = useLogout();
  
    const handleClick = () => {
      logout();
    };
    const { user } = useAuthContext();
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                {/* <img src={user.photoURL} alt="profile picture" /> */}
                <div className="text">
                    {/* <h2>Pramitha</h2> */}
                    {user && (
            <div class="bg-purple-400 p-4 rounded-lg shadow-md">
            <span class="text-white text-xl font-bold">{user.email}</span>
          </div> 
          )}
                    <p>Personal Finance Tracker</p>
                </div>
            </div>
            {/* <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul> */}

            <ul className="menu-items">
            {menuItems.map((item) => (
                <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`group cursor-pointer relative py-3 px-4 transition-transform transform ${
                    active === item.id ? 'active bg-purple-600 rounded-tr-2xl rounded-br-2xl' : 'hover:bg-gray-200 '
                } hover:scale-105 hover:shadow-lg`}
                >
                {item.icon}
                <span className="ml-2">{item.title}</span>
                <div
                    className={`absolute inset-0 hidden group-hover:block bg-white opacity-10 transition-opacity duration-300`}
                ></div>
                </li>
            ))}
            </ul>

            <div className="bottom-nav">
            <button  onClick={handleClick} className='bg-purple-950 hover:opacity-90 text-white 
            font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline
            transition-transform transform hover:scale-125'>
                {signout}  Sign out
                </button>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation