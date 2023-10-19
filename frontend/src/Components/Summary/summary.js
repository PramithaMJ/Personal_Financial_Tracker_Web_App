import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import {  Bubble, Doughnut, Line, Pie, Radar } from 'react-chartjs-2'
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Summary = ({isDarkMode}) => {
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
         
        ],
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Income',
        data: [2000, 2500, 2200, 2800, 3000, 3200],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Expenses',
        data: [1500, 1800, 2000, 2100, 2200, 2300],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  const doughnutChartData = {
    labels: Object.keys(categorizedExpenses),
    datasets: [
      {
        data: Object.values(categorizedExpenses),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
         
        ],
      },
    ],
  };


  const bubbleChartData = {
    datasets: [
      {
        label: 'Expense Categories',
        data: [
          { x: 10, y: 20, r: 15 }, 
          { x: 25, y: 10, r: 30 },
          
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          
        ],
      },
    ],
  };
  const barChartData = [
    { name: 'Income', amount: totalIncome },
    { name: 'Expenses', amount: totalExpenses },
  ];

  return (
    <SummaryContainer isDarkMode={isDarkMode} >
     <h2 className={isDarkMode ? "dark-mode-text font-serif font-extrabold text-4xl m-5" : " font-serif font-extrabold text-4xl m-5"}>
  Summary
</h2>

      <SectionContainer isDarkMode={isDarkMode} >
        <h3 className='className={isDarkMode ? "dark-mode-text font-serif font-extrabold text-xl m-5" : " font-serif font-extrabold text-4xl m-5"}'>
          Income
          </h3>
        <SummaryTable isDarkMode={isDarkMode} >
          <thead>
            <tr>
              <th  className=' text-purple-800' >Category</th>
              <th className='text-purple-800'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(categorizedIncome).map((category) => (
              <tr key={category}>
                <td className=' text-black'>{category}</td>
                <td className=' text-black'>LKR. {categorizedIncome[category]}</td>
              </tr>
            ))}
          </tbody>
        </SummaryTable>
      </SectionContainer>
      <SectionContainer>
        <h3 className='{isDarkMode ? "dark-mode-text font-serif font-extrabold text-xl m-5" : " font-serif font-extrabold text-xl m-5"}'>
          Expenses
          </h3>
        <SummaryTable isDarkMode={isDarkMode}>
          <thead>
            <tr>
              <th className='text-purple-800'>Category</th>
              <th className='text-purple-800'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(categorizedExpenses).map((category) => (
              <tr key={category}>
                <td className=' text-black'>{category}</td>
                <td className=' text-black'>LKR. {categorizedExpenses[category]}</td>
              </tr>
            ))}
          </tbody>
        </SummaryTable>

      </SectionContainer>
      <ChartRow isDarkMode={isDarkMode}>
        <PieChartContainer isDarkMode={isDarkMode}>
          <Pie data={incomePieChartData} />
        </PieChartContainer>
        <PieChartContainer isDarkMode={isDarkMode}>
          <Pie data={expensesPieChartData} />
        </PieChartContainer>
      </ChartRow>


      <TotalContainer isDarkMode={isDarkMode}>
        <div>
          <p>Total Income:</p>
          <p>LKR. {totalIncome}</p>
        </div>
        <div>
          <p>Total Expenses:</p>
          <p>LKR. {totalExpenses}</p>
        </div>
        <div>
          <p>Total Balance:</p>
          <p>LKR. {totalBalance}</p>
        </div>
      </TotalContainer>

        <Line data={lineChartData} />
        <ChartRow>
        <ChartContainer>
          <Doughnut data={doughnutChartData} />
        </ChartContainer>
        <ChartContainer>
          <Bubble data={bubbleChartData} />
        </ChartContainer>
      </ChartRow>
<div>
      <BarChart width={600} height={300} data={barChartData}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="amount" fill="#8884d8" barSize={30} />
      </BarChart>
</div>

    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  text-align: left;
  h2 {
    margin-bottom: 1rem;
  }
  .dark-mode-text {
    color: #222;
  }
  
`;


const SectionContainer = styled.div`
  margin-bottom: 1.5rem;
  .dark-mode-text2 {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#2a2746")};
  }
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
flex: 1;
margin-top: 1rem;
`;

const ChartContainer = styled.div`
  width: 50%; /* Adjust the width to control the size of the charts */
`;

export default Summary;
