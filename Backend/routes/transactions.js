import express from "express";
import {
  addIncomes,
  deleteIncomes,
  getIncomes,
} from "../controllers/income.js";
import {
  addExpenses,
  deleteExpenses,
  getExpenses,
} from "../controllers/expenses.js";

const router = express.Router();

// Middleware to parse JSON data
router.use(express.json());

router
  .post("/add-incomes", addIncomes)
  .get("/get-incomes", getIncomes)
  .delete("/delete-incomes/:id", deleteIncomes)
  .post("/add-expense", addExpenses)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expenses/:id", deleteExpenses);

export default router;
