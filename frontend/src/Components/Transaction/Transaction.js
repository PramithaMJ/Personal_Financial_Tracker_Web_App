import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from "../../styles/Layout";
import History from "../History/RecentHistory";
import { useEffect } from 'react';
import LoginFooter from '../Footer/LoginFooter';

function Transaction({ isDarkMode }) {
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
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <DashboardStyled isDarkMode={isDarkMode}>
      <InnerLayout>
        <h1 className={isDarkMode ? "dark-mode-text font-serif font-extrabold text-4xl m-5" : "font-serif font-extrabold text-4xl m-5"}>All Transactions</h1>
        <div className="stats-con">
          <div className="history-con">
            <HistoryStyled>
              <h2 className="text-2xl font-bold text-gray-800 dark-mode-text2 transition-transform transform hover:scale-105">History</h2>

              {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                  <div key={_id} className="history-item transition-transform transform hover:scale-105">
                    <p style={{
                      color: type === 'expense' ? 'red' : 'var(--color-green)'
                    }}>
                      {title}
                    </p>

                    <p style={{
                      color: type === 'expense' ? 'red' : 'var(--color-green)'
                    }}>
                      {
                        type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                      }
                    </p>
                  </div>
                );
              })}
            </HistoryStyled>
            <h2 className="text-2xl font-bold text-gray-800 dark-mode-text2 transition-transform transform hover:scale-105">Min <span className='dark-mode-text2'>Salary</span>Max</h2>

            <div className="salary-item transition-transform transform hover:scale-105">
            <p>LKR.{Math.min(...incomes.map((item) => item.amount))}</p>
          <p className='transition-transform transform hover:scale-105'>LKR.{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark-mode-text2 transition-transform transform hover:scale-105" >Min <span className=' dark-mode-text2'>Expense</span>Max</h2>
            <div className="salary-item transition-transform transform hover:scale-105">
            <p className='transition-transform transform hover:scale-105'>LKR.{Math.min(...expenses.map((item) => item.amount))}</p>
          <p className='transition-transform transform hover:scale-105'>LKR.{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  background: ${(props) => (props.isDarkMode ? "#333" : "#fff")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#333")};

  .history-con {
    grid-column: 4 / -1;
    h2 {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      }
    }
  }

  .dark-mode-text {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#333")};
  }
  .dark-mode-text2 {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#2a2746")};
  }
`;

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: ${(props) => (props.isDarkMode ? "#2a2746" : "#fcf6f9")};
    border: 2px solid ${(props) => (props.isDarkMode ? "#fff" : "#ffffff")};
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Transaction;
