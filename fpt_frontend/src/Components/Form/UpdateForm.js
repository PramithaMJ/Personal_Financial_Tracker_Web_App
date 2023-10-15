import React, { useState } from "react";

function UpdateForm({
  id,
  title: initialTitle,
  description: initialDescription,
  amount: initialAmount,
  date: initialDate,
  category: initialCategory,
  updateItem,
  setIsUpdating,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [amount, setAmount] = useState(initialAmount);
  const [date, setDate] = useState(initialDate);
  const [category, setCategory] = useState(initialCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare updated income data
    const updatedIncome = {
      id,
      title,
      description,
      amount,
      date,
      category,
    };

    // Call the updateItem function from props to update the income
    updateItem(updatedIncome);
   
    // Close the update form
    setIsUpdating(false);
  };

  return (
    <div>
      <h3>Update Income</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <button type="submit">Save Changes</button>
        <button onClick={() => updateItem(null)}>Cancel</button>
      </form>
    </div>
  );
}

export default UpdateForm;
