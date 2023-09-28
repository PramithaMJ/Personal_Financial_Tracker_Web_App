import ExpenseSchema from "../models/expenseModel.js"

export const addExpenses = async (req, res) => {
  //console.log(req.body);

  const { title, amount, category, description, date } = req.body;

  const income = ExpenseSchema({
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

    await income.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  console.log(income);
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