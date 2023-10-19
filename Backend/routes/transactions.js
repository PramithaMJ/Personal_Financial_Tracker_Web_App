import express from "express";
import {
  addIncomes,
  deleteIncomes,
  getIncomes,
  updateIncome,
} from "../controllers/income.js";

import {
  addExpenses,
  deleteExpenses,
  getExpenses,
  updateExpenses,
} from "../controllers/expenses.js";

import requireAuth from '../middleware/requireAuth.js'

const router = express.Router();

router.use(requireAuth)
router.use(express.json());

router
  .post("/add-incomes", addIncomes)
  .get("/get-incomes", getIncomes)
  .put('/update-incomes/:id', updateIncome)
  .delete("/delete-incomes/:id", deleteIncomes)
  
  .post("/add-expense", addExpenses)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expenses/:id", deleteExpenses)
  .put('/update-expenses/:id', updateExpenses);

export default router;