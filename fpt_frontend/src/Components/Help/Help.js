import React, { useState } from 'react';

const Help = () => {
  // State to toggle the visibility of the help content
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  // Function to toggle the visibility of the help content
  const toggleHelp = () => {
    setIsHelpVisible(!isHelpVisible);
  };

  return (
    <div className="help-container">
      <button onClick={toggleHelp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {isHelpVisible ? 'Hide Help' : 'Show Help'}
      </button>
      {isHelpVisible && (
        <div className="help-content">
          <h2>How to Use This App</h2>
          <p>
            Welcome to our app! Here are some instructions on how to use it:
          </p>
          <ul>
          <ul>
    <li><strong>Step 1: Sign Up or Log In</strong></li>
    <p>First, create an account if you're a new user, or log in if you already have an account. Your personal data will be securely stored for your convenience.</p>

    <li><strong>Step 2: Add Income Sources</strong></li>
    <p>Go to the "Income" section and add your sources of income. This can include your salary, rental income, investment dividends, or any other sources of money that you receive regularly.</p>

    <li><strong>Step 3: Enter Expenses</strong></li>
    <p>Head to the "Expenses" section and start adding your expenses. You can categorize them into various groups like rent/mortgage, utilities, groceries, entertainment, and more. This will give you a clear picture of where your money is going.</p>

    <li><strong>Step 4: Set Budgets</strong></li>
    <p>Establish monthly or weekly budgets for different expense categories. The app can help you keep track of how well you're sticking to your financial plan.</p>

    <li><strong>Step 5: Track Your Transactions</strong></li>
    <p>Regularly update your income and expenses within the app. You can manually enter transactions or link your bank accounts to automate the process. This step is crucial for maintaining an accurate financial overview.</p>

    <li><strong>Step 6: Analyze Your Financial Health</strong></li>
    <p>Use the app's built-in tools to analyze your financial health. You can view income vs. expenses, track your progress towards budget goals, and identify areas where you can save money.</p>

    <li><strong>Step 7: History</strong></li>
    <p>Generate detailed financial reports, such as income statements, expense breakdowns, and savings summaries. These reports can help you make informed financial decisions.</p>

    <li><strong>Step 8: Plan for the Future</strong></li>
    <p>Based on your financial history and analysis, create a plan for your financial future. Set savings goals, investment strategies, and debt repayment plans to secure your financial well-being.</p>

    <li><strong>Step 9: Get Support</strong></li>
    <p>If you have questions or encounter issues, visit the app's support section. You can find FAQs, contact information, and helpful resources to assist you in using the app effectively.</p>

    <li><strong>Step 10: Secure Your Data</strong></li>
    <p>Always prioritize the security of your financial information. Ensure that you regularly update your password and enable two-factor authentication if available. Avoid sharing your login credentials with anyone.</p>
</ul>

          </ul>
          <p>If you have any questions or need assistance, please contact us.</p>
        </div>
      )}
    </div>
  );
};

export default Help;
