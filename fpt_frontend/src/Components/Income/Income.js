import React, { useEffect } from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/IncomeForm";
import IncomeItem from "../IncomeItem/IncomeItem";

 const Income = ({isDarkMode}) => {
  const {
    addIncome,
    incomes,
    getIncomes,
    deleteIncome,
    updateIncome,
    totalIncome,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled isDarkMode={isDarkMode}>
      <InnerLayout isDarkMode={isDarkMode}>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span>${totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form isDarkMode={isDarkMode}/>
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
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
                  deleteItem={deleteIncome}
                  updateItem={updateIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
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
`;

export default Income;