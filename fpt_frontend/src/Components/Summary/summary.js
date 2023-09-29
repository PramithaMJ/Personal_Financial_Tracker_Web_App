import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { Bar, Bubble, Doughnut, Line, Pie, Radar } from 'react-chartjs-2'

const Summary = () => {
  const { incomes, expenses } = useGlobalContext();

  // Calculate total income
  const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Calculate total balance
  const totalBalance = totalIncome - totalExpenses;

  // Categorize income and expense transactions
  const categorizedIncome = {};
  incomes.forEach((income) => {
    const { category, amount } = income;
    if (categorizedIncome[category]) {
      categorizedIncome[category] += amount;
    } else {
      categorizedIncome[category] = amount;
    }
  });

  const categorizedExpenses = {};
  expenses.forEach((expense) => {
    const { category, amount } = expense;
    if (categorizedExpenses[category]) {
      categorizedExpenses[category] += amount;
    } else {
      categorizedExpenses[category] = amount;
    }
  });

  const expensesPieChartData = {
    labels: Object.keys(categorizedExpenses), // Categories for expenses
    datasets: [
      {
        data: Object.values(categorizedExpenses), // Amounts for expenses
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          // Add more colors for additional categories
        ],
      },
    ],
  };

  const incomePieChartData = {
    labels: Object.keys(categorizedIncome), // Categories for income
    datasets: [
      {
        data: Object.values(categorizedIncome), // Amounts for income
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          // Add more colors for additional categories
        ],
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Income',
        data: [2000, 2500, 2200, 2800, 3000, 3200], // Monthly income data
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Expenses',
        data: [1500, 1800, 2000, 2100, 2200, 2300], // Monthly expenses data
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  const doughnutChartData = {
    labels: Object.keys(categorizedExpenses), // Expense categories
    datasets: [
      {
        data: Object.values(categorizedExpenses), // Amounts for expenses
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          // Add more colors for additional categories
        ],
      },
    ],
  };


  const bubbleChartData = {
    datasets: [
      {
        label: 'Expense Categories',
        data: [
          { x: 10, y: 20, r: 15 }, // Category A
          { x: 25, y: 10, r: 30 }, // Category B
          // Add more data points for additional categories
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          // Add more colors for additional categories
        ],
      },
    ],
  };




  return (
    <SummaryContainer>
      <h2>Summary</h2>
      <SectionContainer>
        <h3>Income</h3>
        <SummaryTable>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(categorizedIncome).map((category) => (
              <tr key={category}>
                <td>{category}</td>
                <td>${categorizedIncome[category]}</td>
              </tr>
            ))}
          </tbody>
        </SummaryTable>
      </SectionContainer>
      <SectionContainer>
        <h3>Expenses</h3>
        <SummaryTable>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(categorizedExpenses).map((category) => (
              <tr key={category}>
                <td>{category}</td>
                <td>${categorizedExpenses[category]}</td>
              </tr>
            ))}
          </tbody>
        </SummaryTable>

      </SectionContainer>

      <ChartRow>
        <PieChartContainer>
          <Pie data={incomePieChartData} />
        </PieChartContainer>
        <PieChartContainer>
          <Pie data={expensesPieChartData} />
        </PieChartContainer>
      </ChartRow>


      <TotalContainer>
        <div>
          <p>Total Income:</p>
          <p>${totalIncome}</p>
        </div>
        <div>
          <p>Total Expenses:</p>
          <p>${totalExpenses}</p>
        </div>
        <div>
          <p>Total Balance:</p>
          <p>${totalBalance}</p>
        </div>
      </TotalContainer>

        <Line data={lineChartData} />

        <Doughnut data={doughnutChartData} />

        <Bubble data={bubbleChartData} />
      

    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  text-align: center;
  h2 {
    margin-bottom: 1rem;
  }
`;

const SectionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SummaryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  th:first-child,
  td:first-child {
    width: 60%;
  }
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    font-weight: bold;
  }
`;

const ChartRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PieChartContainer = styled.div`
  flex: 1; /* Equal width for both pie charts */
  margin-top: 1rem;
`;
export default Summary;
