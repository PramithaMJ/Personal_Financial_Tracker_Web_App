import React, { useEffect } from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import ExpenseForm from "../Expenses/ExpenseForm";
import IncomeItem from "../IncomeItem/IncomeItem";

const  Expenses = ({isDarkMode}) =>{
  const {
    addIncome,
    expenses,
    getExpenses,
    updateExpense,
    deleteExpense,
    totalExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled isDarkMode={isDarkMode}>
      <InnerLayout isDarkMode={isDarkMode}>
        <h1 className={isDarkMode ? "dark-mode-text font-serif font-extrabold text-4xl m-5" : " font-serif font-extrabold text-4xl m-5"}>
          Expenses
          </h1>
        <h2 className={`total-income ${isDarkMode ? "dark-mode-text" : ""}`}>
          Total Expense: <span>LKR.{totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm isDarkMode={isDarkMode}/>
          </div>

          <div className="incomes">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
                expense;
              console.log(expense);
              return (
                <IncomeItem isDarkMode={isDarkMode}
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                  updateItem={updateExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.isDarkMode ? "#2a2746" : "#fff")};
    border: 2px solid ${(props) => (props.isDarkMode ? "#fff" : "#2a2746")};

    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: ${(props) => (props.isDarkMode ? "#ffffff" : "var(--color-dark)")};
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
  .dark-mode-text {
    color: #fff;
  }
`;

export default Expenses;
