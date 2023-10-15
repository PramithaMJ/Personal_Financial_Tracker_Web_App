import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layout';
import Chart from '../Chart/Chart';
import { dollar } from '../../utils/Icons';
import { useGlobalContext } from '../../context/globalContext';
import History from '../History/History';
import { Bar, Pie } from 'react-chartjs-2';

const generateExpenseChartData = (expenses) => {
    const categories = {};
  
    // Calculate total expenses for each category
    expenses.forEach((expense) => {
      const { category, amount } = expense;
      if (categories[category]) {
        categories[category] += amount;
      } else {
        categories[category] = amount;
      }
    });
  
    // Convert categories object to an array for the chart
    const data = {
      labels: Object.keys(categories), // Category names
      datasets: [
        {
          data: Object.values(categories), // Category totals
          backgroundColor: [
            // Add colors for each category
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
          ],
        },
      ],
    };
  
    return data;
  };

const generateIncomeChartData = (incomes) => {
    const categories = {}; // Object to store category totals
  
    // Calculate total income for each category
    incomes.forEach((income) => {
      const { category, amount } = income;
      if (categories[category]) {
        categories[category] += amount;
      } else {
        categories[category] = amount;
      }
    });
  
    // Convert categories object to an array for the chart
    const data = {
      labels: Object.keys(categories), // Category names
      datasets: [
        {
          data: Object.values(categories), // Category totals
          backgroundColor: [
            // Add colors for each category
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            // Add more colors for additional categories
          ],
        },
      ],
    };
  
    return data;
  };
  
function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    const expensesPieChartData = generateExpenseChartData(expenses);
    const incomePieChartData = generateIncomeChartData(incomes);

    return (
          <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="balance">
                        <h2>Total Balance</h2>
                        <p>
                            {dollar} {totalBalance()}
                        </p>
                    </div>
                    <div className="chart-con">
                        <div className="chart-row">
                            {/* First pie chart (Total Income) */}
                            <div className="chart-item">
                                <Pie data={incomePieChartData} height={150} width={150} />
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            {/* Second pie chart (Total Expense) */}
                            <div className="chart-item">
                                <Pie data={expensesPieChartData} height={150} width={150} />
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="chart-container">
                        <Chart />
                    </div>

                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                        </div>
                    
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .balance {
            grid-column: 1 / 2; /* Adjust grid column for Total Balance */
            background: #FCF6F9;
            border: 2px solid #FFFFFF;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            border-radius: 20px;
            padding: 1rem;
            p {
                font-size: 3.5rem;
                font-weight: 700;
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
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    text-align: center;
                    p {
                        font-size: 1.8rem;
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
        }
        .salary-title {
            font-size: 1.2rem;
            span {
                font-size: 1.8rem;
            }
        }
        .salary-item {
            background: #FCF6F9;
            border: 2px solid #FFFFFF;
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
`;

export default Dashboard