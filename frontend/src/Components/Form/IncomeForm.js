import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

const Form = ({ isDarkMode }) => {
  const { addIncome, getIncomes, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <FormStyled isDarkMode={isDarkMode} 
    onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary Title"
          onChange={handleInput("title")}
          style={{
            color: isDarkMode ? "#fff" : "rgba(34, 34, 96, 1)",
            background: isDarkMode ? "#222" : "transparent", 
          }}
        />
      </div>
      <div className="input-control">
        <input
          value={amount}
          type="text"
          name={"amount"}
          placeholder={"Salary Amount"}
          onChange={handleInput("amount")}
          style={{
            color: isDarkMode ? "#fff" : "rgba(34, 34, 96, 1)",
            background: isDarkMode ? "#222" : "transparent", 
          }}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
          customInput={
            <input
              style={{
                color: isDarkMode ? "#fff" : "rgba(34, 34, 96, 1)",
                background: isDarkMode ? "#222" : "transparent",
              }}
            />
          }
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
          style={{
            color: isDarkMode ? "#fff" : "rgba(34, 34, 96, 1)",
            background: isDarkMode ? "#222" : "transparent",
          }}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="pocketMoney">Pocket Money</option>
          <option value="salary">Selling</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Interest</option>
          <option value="bank">Bank Transfer</option>
          <option value="gift">Gifts</option>
          <option value="commition">Commission</option>
          <option value="youTube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add a reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
          style={{
            color: isDarkMode ? "#fff" : "rgba(34, 34, 96, 1)",
            background: isDarkMode ? "#222" : "transparent", 
          }}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: ${props => (props.isDarkMode ? '#ffffff' : '#222260')};
    &::placeholder {
      color: ${props => (props.isDarkMode ? '#ffffff' : '#222260' )};
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;
export default Form;
