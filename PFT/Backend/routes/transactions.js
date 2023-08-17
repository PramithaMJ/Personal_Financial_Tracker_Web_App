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
  .post("/add-income", addIncomes)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncomes)
  .post("/add-expenses", addExpenses)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expenses/:id", deleteExpenses);

export default router;
