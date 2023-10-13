// UpdateIncome.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateIncome() {
  const { id } = useParams();
  const [income, setIncome] = useState({});
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedAmount, setUpdatedAmount] = useState('');

  useEffect(() => {
    // Fetch income details by ID and populate the form fields
    axios.get(`/api/v1/get-incomes/${id}`)
      .then((response) => {
        setIncome(response.data);
        setUpdatedTitle(response.data.title);
        setUpdatedAmount(response.data.amount);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleUpdate = () => {
    // Send updated income data to the backend
    axios.put(`/api/v1/update-incomes/${id}`, {
      title: updatedTitle,
      amount: updatedAmount,
    })
      .then(() => {
        alert('Income updated successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Edit Income</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={updatedAmount}
        onChange={(e) => setUpdatedAmount(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Income</button>
    </div>
  );
}

export default UpdateIncome;
