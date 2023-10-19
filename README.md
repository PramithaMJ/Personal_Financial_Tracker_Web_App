# Personal Finance Tracker

## Table of Contents
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Authentication](#authentication)
- [Dark and Light Mode](#dark-and-light-mode)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## About

This is a MERN (MongoDB, Express, React, Node.js) Stack web application designed to help you track your personal finances. You can add expenses and income, manage your money, and gain insights from the data. It features JWT authentication for user management and integrates with Google and Facebook for authentication through Firebase. Additionally, it offers dark and light mode options for a customized user experience.

## Features

- User registration and authentication (JWT, Google, Facebook via Firebase)
- Add, edit, and delete expenses and income
- Categorize expenses and income for better organization
- Dashboard for an overview of your financial situation
- Data analysis and visualization for better money management
- Dark and light mode for user preference

## Technologies Used

- MongoDB for database storage
- Express.js for the backend server
- React for the frontend
- Node.js for server-side JavaScript
- JWT for user authentication
- Firebase for Google and Facebook authentication
- Charting libraries for data visualization (e.g., Chart.js)
- TailwindCSS and Styled Components for styling and dark/light mode

## Setup

1. Clone this repository to your local machine.

```bash
git clone https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App.git
```

## Video Demo

https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/7457a4f9-8c0b-4734-99b2-68bc7ae60d88

## Screenshots

-- Getting Started
<img width="1710" alt="Screenshot 2023-10-20 at 2 14 39 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/db69c712-344a-4ff6-995c-b3b763b1b07a">

-- Loggin Page
<img width="1710" alt="Screenshot 2023-10-20 at 2 14 58 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/3d6e524e-6873-4945-a660-e49a1a92bc88">

-- SignUp Page
<img width="1710" alt="Screenshot 2023-10-20 at 2 15 12 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/8196f3c3-3956-4156-87c8-77ac6f679015">

-- Signup with google
<img width="1710" alt="Screenshot 2023-10-20 at 2 15 23 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/ab57cb3e-ae6d-401b-a3e4-7805c781c696">
<img width="1710" alt="Screenshot 2023-10-20 at 2 17 53 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/60be6a2c-1fc7-4e12-84fc-61e40d23143c">

-- Dashboard
<img width="1710" alt="Screenshot 2023-10-20 at 2 15 40 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/12dc5003-922e-4686-ad15-343e20ff9632">
<img width="1710" alt="Screenshot 2023-10-20 at 2 16 54 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/4262733c-ce43-4c62-b9f6-b89ceafe3821">

-- Transaction
<img width="1710" alt="Screenshot 2023-10-20 at 2 16 02 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/35bbeff3-bb0e-4e2d-bbd4-6e3e3962c873">
<img width="1710" alt="Screenshot 2023-10-20 at 2 17 01 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/7de09dfd-f829-47e4-9e1e-2b71689720ab">

-- Incomes
<img width="1710" alt="Screenshot 2023-10-20 at 2 16 12 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/d5191c22-b6a5-4216-a0ea-c4a15170b40b">
<img width="1710" alt="Screenshot 2023-10-20 at 2 17 08 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/9074ce33-670e-4d58-ad08-30fb123c0c3b">

-- Expenses
<img width="1710" alt="Screenshot 2023-10-20 at 2 16 21 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/5ec68c7c-44e9-4918-8e96-17fb71c9e51d">
<img width="1710" alt="Screenshot 2023-10-20 at 2 17 15 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/c810965c-05bc-486c-870d-66fcf96241e7">

-- Summary
<img width="1710" alt="Screenshot 2023-10-20 at 2 16 29 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/5823ef47-8ac6-4427-9b70-92f6cad66c59">
<img width="1710" alt="Screenshot 2023-10-20 at 2 17 22 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/470ce859-19f0-4bd7-9294-3ac05af7cf53">

-- History
<img width="1710" alt="Screenshot 2023-10-20 at 2 16 36 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/a00416eb-fc62-4073-891d-6c7c95145cdb">

<img width="1710" alt="Screenshot 2023-10-20 at 2 17 29 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/afa751c0-6010-4e10-8d4a-adeea0f0ea0e">

-- Help
<img width="1710" alt="Screenshot 2023-10-20 at 2 16 46 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/d5a16de0-f4ec-48ca-a19f-a13be1685f0e">
<img width="1710" alt="Screenshot 2023-10-20 at 2 17 39 AM" src="https://github.com/PramithaMJ/Personal_Financial_Tracker_Web_App/assets/123730262/7fa7708a-6c9c-4f52-b363-9c9632cbc5b5">
