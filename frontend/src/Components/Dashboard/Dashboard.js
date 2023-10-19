import React, { useEffect } from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import Chart from "../Chart/Chart";
import { useGlobalContext } from "../../context/globalContext";
import History from "../History/RecentHistory";
import { Pie } from "react-chartjs-2";

import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const generateExpenseChartData = (expenses) => {
  const categories = {};

  expenses.forEach((expense) => {
    const { category, amount } = expense;
    if (categories[category]) {
      categories[category] += amount;
    } else {
      categories[category] = amount;
    }
  });

  const data = {
    labels: Object.keys(categories), 
    datasets: [
      {
        data: Object.values(categories), 
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  return data;
};


const generateIncomeChartData = (incomes) => {
  const categories = {}; 

  incomes.forEach((income) => {
    const { category, amount } = income;
    if (categories[category]) {
      categories[category] += amount;
    } else {
      categories[category] = amount;
    }
  });

  const data = {
    labels: Object.keys(categories), 
    datasets: [
      {
        data: Object.values(categories), 
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
        ],
      },
    ],
  };

  return data;
};


const Dashboard = ({ isDarkMode }) => {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  const expensesPieChartData = generateExpenseChartData(expenses);
  const incomePieChartData = generateIncomeChartData(incomes);

 const totalIncome2 = incomes.reduce((total, income) => total + income.amount, 0);

 const totalExpenses2 = expenses.reduce((total, expense) => total + expense.amount, 0);

  const barChartData = [
    { name: "Total Income", amount: totalIncome2 },
    { name: "Total Expenses", amount: totalExpenses2 },
  ];

  return (
    <DashboardStyled isDarkMode={isDarkMode}>
    <InnerLayout>
      <h1 className={isDarkMode ? "dark-mode-text font-serif font-extrabold text-4xl m-5" : "font-serif font-extrabold text-4xl m-5"}>All Transactions</h1>
      <div className="stats-con">
        <div className="balance transition-transform transform hover:scale-105">
          <h2 className={isDarkMode ? "dark-mode-text " : ""}>Total Balance</h2>
          <p className="mx-auto transition-transform transform hover:scale-105">
            LKR. {totalBalance()}
          </p>
        </div>
        <div className="chart-con ">
          <div className="chart-row ">
            <div className="chart-item transition-transform transform hover:scale-105">
              <Pie data={incomePieChartData} height={150} width={150} />
              <h2 className={isDarkMode ? "dark-mode-text" : ""}>Total Income</h2>
              <p className="transition-transform transform hover:scale-105">
                LKR. {totalIncome()}
              </p>
            </div>
            <div className="chart-item transition-transform transform hover:scale-105">
              <Pie data={expensesPieChartData} height={150} width={150} />
              <h2 className={isDarkMode ? "dark-mode-text" : ""}>Total Expense</h2>
              <p>
                LKR. {totalExpenses()}
              </p>
            </div>
          </div>
        </div>
        <div className="chart-container">
          <Chart />
        </div>
        <div className="history-con">
          <History />
          <h2 className="salary-title">
            Min <span>Salary</span>Max
          </h2>
          <div className="salary-item transition-transform transform hover:scale-105">
            <p className="transition-transform transform hover:scale-105">LKR.{Math.min(...incomes.map((item) => item.amount))}</p>
            <p className="transition-transform transform hover:scale-105">LKR.{Math.max(...incomes.map((item) => item.amount))}</p>
          </div>
          <h2 className="salary-title">
            Min <span>Expense</span>Max
          </h2>
          <div className="salary-item transition-transform transform hover:scale-105">
            <p className="transition-transform transform hover:scale-105">LKR.{Math.min(...expenses.map((item) => item.amount))}</p>
            <p className="transition-transform transform hover:scale-105">LKR.{Math.max(...expenses.map((item) => item.amount))}</p>
          </div>
        </div>
      </div>
    </InnerLayout>
    <BarChart
        width={600}
        height={300}
        data={barChartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
  </DashboardStyled>
);
};

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .balance {
      grid-column: 1 / 2; /* Adjust grid column for Total Balance */
      background: ${(props) => (props.isDarkMode ? "#2a2746" : "#fff")};
      border: 2px solid ${(props) => (props.isDarkMode ? "#fff" : "#2a2746")};
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      border-radius: 20px;
      padding: 1rem;
      p {
        font-size: 3.5rem;
        font-weight: 700;
        color: ${(props) => (props.isDarkMode ? "#fff" : "#333")}; // Text color
      }
    }
    .chart-con {
      grid-column: 2 / 5; /* Adjust grid column for pie charts and Chart */
      height: 400px;
      .chart-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        .chart-item {
          width: 48%;
          background: ${(props) => (props.isDarkMode ? "#2a2746" : "#fff")};
          border: 2px solid ${(props) => (props.isDarkMode ? "#fff" : "#2a2746")};
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          text-align: center;
          p {
            font-size: 1.8rem;
            color: ${(props) => (props.isDarkMode ? "#fff" : "#333")}; // Text color
          }
        }
      }
    }
    .chart-container {
      grid-column: 1 / -1; /* Expand to full width */
      margin-top: 2rem;
    }
  }

  .history-con {
    grid-column: 4 / -1;
    h2 {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${(props) => (props.isDarkMode ? "#fff" : "#333")}; // Text color
    }
    .salary-title {
      font-size: 1.2rem;
      span {
        font-size: 1.8rem;
      }
    }
    .salary-item {
      background: ${(props) => (props.isDarkMode ? "#2a2746" : "#fcf6f9")};
      border: 2px solid ${(props) => (props.isDarkMode ? "#fff" : "#ffffff")};
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      padding: 1rem;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: 600;
        font-size: 1.6rem;
        color: ${(props) => (props.isDarkMode ? "#fff" : "#333")}; // Text color
      }
    }
  }
  .dark-mode-text {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#333")};
  }
`;

export default Dashboard;
