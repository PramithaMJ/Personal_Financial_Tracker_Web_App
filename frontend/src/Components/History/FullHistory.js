import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import IncomeItem from "../IncomeItem/IncomeItem";

function FullHistory({ isDarkMode }) {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()
    const {
        addIncome,
        expenses,
        getExpenses,
        updateExpense,
        deleteExpense,
        totalExpenses,
    incomes,
    getIncomes,
    deleteIncome,
    updateIncome,
    totalIncome,
      } = useGlobalContext();
      

    return (
        <HistoryStyled isDarkMode={isDarkMode}>
           <h2 className={`total-income ${isDarkMode ? "dark-mode-text font-bold font-serif text-2xl" : "font-bold"}`}>
            Recent History
            </h2>

            {history.map((item) =>{
                const {_id, title, amount, type} = item
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
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}


<div className='font-mono font-extrabold text-3xl text-center'> Income History</div>
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


<div className='font-mono font-extrabold text-3xl text-center'>
    Expenses History
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

        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dark-mode-text {
        color: #fff;
      }
`;

export default FullHistory
















