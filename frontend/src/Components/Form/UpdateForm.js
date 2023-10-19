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
    const updatedIncome = {
      id,
      title,
      description,
      amount,
      date,
      category,
    };

    updateItem(updatedIncome);
    setIsUpdating(false);
  };

  return (
    <div>
      <h3>Update Income</h3>
      <form onSubmit={handleSubmit}>
        
        <div className="m-3">
        <label htmlFor="title">Title : </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border border-gray-400 rounded p-2"
        />
              <label htmlFor="description">Description : </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="border border-gray-400 rounded p-2"
            />
         </div>
         <div className="m-3">

            <label htmlFor="amount">Amount : </label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="border border-gray-400 rounded p-2"
              />

        <label htmlFor="date">Date : </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          className="border border-gray-400 rounded p-2"
        />
         </div>
         <div className="m-3">

        <label htmlFor="category">Category : </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="border border-gray-400 rounded p-2"
        />
         </div>
            <button type="submit" class="bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
              Save Changes
            </button>
        {/* <button onClick={() => updateItem(null)}>Cancel</button> */}
      </form>
    </div>
  );
}

export default UpdateForm;
