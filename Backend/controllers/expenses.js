import ExpenseSchema from "../models/expenseModel.js"

export const addExpenses = async (req, res) => {
  //console.log(req.body);

  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    //     validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be positive number" });
    }

    await expense.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  console.log(expense);
  //res.send(req.body)
};

export const getExpenses = async (req, res) => {
  try {
    const incomes = await ExpenseSchema.find().sort({ createedAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/*
export const deleteExpenses = async (req, res) => {
  const { id } = req.params;
  //console.log(id);
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
*/

export const deleteExpenses = async (req, res) => {
  const {id} = req.params;
  ExpenseSchema.findByIdAndDelete(id)
      .then((income) =>{
          res.status(200).json({message: 'Expense Deleted'})
      })
      .catch((err) =>{
          res.status(500).json({message: 'Server Error'})
      })
}
export const updateExpenses = async (req, res) => {
  const { id } = req.params;
  const { title, description, amount, date, type, category } = req.body;

  try {
    // Find the expenses by ID
    const expense = await ExpenseSchema.findById(id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    // Update expense properties
    expense.title = title;
    expense.description = description;
    expense.amount = amount;
    expense.date = date;
    expense.type = type;
    expense.category = category;

    // Save the updated expense
    await expense.save();

    res.status(200).json({ message: 'Income updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};