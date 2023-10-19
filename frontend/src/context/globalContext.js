import React, { useContext, useState } from "react";
import { login, logout } from "../slices/userSlice.js";
import axios from "axios";
import { useAuthContext } from "../hook/useAuthContext";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

import { useDispatch } from "react-redux";

const BASE_URL = "http://localhost:8000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  // const { user } = useSelector(selectUser);

  const addIncome = async (income) => {
const token = JSON.parse(localStorage.getItem("user")).token;

    const response = await axios.post(`${BASE_URL}add-incomes`, income,{
      headers: {
        Authorization:token,
      },
    })
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      setError(err.response.data.message);
    }
    );
    getIncomes();
  };

  const getIncomes = async () => {
    console.log(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("user")).token;

    if (!token) {
      return;
    }
    await axios.get(`${BASE_URL}get-incomes`,{
      headers: {
        Authorization: token
      },
    }).then((res) => {
      console.log(res);   
      setIncomes(res.data);
    }).catch((err) => {
      setError(err.response.data.message);
    }
    );
    // setIncomes(response.data);
    // console.log(response.data);
  };

  const deleteIncome= async (id) => {
    console.log(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("user")).token;

    if (!token) {
      return;
    }
    await axios.delete(`${BASE_URL}delete-incomes/${id}`,{
      headers: {
        Authorization: token
      },
    }).then((res) => {
      console.log(res);   
    }).catch((err) => {
      setError(err.response.data.message);
    }
    );
    getIncomes();
  } 
  const updateIncome = async (obj) => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    if (!token) {
      return;
    }
    const url = `${BASE_URL}update-incomes/${obj.id}`;
    await axios.put(url,obj,{
      headers: {
        Authorization: token
      },
    }).then((res) => {
      console.log(res);   
    }).catch((err) => {
      setError(err.response.data.message);
    }
    );
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };
  
    const getExpenses = async () => {
      console.log("asdasdasd")
      const token = JSON.parse(localStorage.getItem("user")).token;
  
      if (!token) {
        return;
      }
      await axios.get(`${BASE_URL}get-expenses`,{
        headers: {
          Authorization:token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setExpenses(res.data);
      }).catch((err) => {
        setError(err.response.data.message);
      }
      );
      // setExpenses(response.data);
      // console.log(response.data);
    };

  const addExpense = async (income) => {

    const token = JSON.parse(localStorage.getItem("user")).token;
    const response = await axios.post(`${BASE_URL}add-expense`, income,{
      headers: {
        Authorization:token,
      },
    })
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      setError(err.response.data.message);
    }
    );
    
    getExpenses();
  };
  const deleteExpense = async (id) => {
    const token = JSON.parse(localStorage.getItem("user")).token;

    if (!token) {
      return;
    }
    await axios.delete(`${BASE_URL}delete-expenses/${id}`,{
      headers: {
        Authorization: token
      },
    }).then((res) => {
      console.log(res);   
      // setIncomes(res.data);
    }).catch((err) => {
      setError(err.response.data.message);
    }
    );
    getExpenses();

  };

  const updateExpense = async (obj) => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    if (!token) {
      return;
    }
    const url = `${BASE_URL}update-expenses/${obj.id}`;
    await axios.put(url,obj,{
      headers: {
        Authorization: token
      },
    }).then((res) => {
      console.log(res);   
      // setIncomes(res.data);
    }).catch((err) => {
      setError(err.response.data.message);
    }
    );
    getExpenses();

  };

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        updateIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        updateExpense,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
