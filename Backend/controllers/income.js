import IncomeSchema from "../models/IncomeModel.js";

export const addIncomes = async (req, res) => {
  //console.log(req.body);

  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
    user: req.user,
  });

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be positive number" });
    }

    await income.save();
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  console.log(income);
  //res.send(req.body)
};

export const getIncomes = async (req, res) => {
  console.log(req.user);
  try {
    const incomes = await IncomeSchema.find({ user: req.user });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteIncomes = async (req, res) => {

  const {id} = req.params;
  IncomeSchema.findByIdAndDelete({ _id: id })
      .then((income) =>{
          res.status(200).json({message: 'Income Deleted'})
      })
      .catch((err) =>{
          res.status(500).json({message: 'Server Error'})
      })
}

export const updateIncome = async (req, res) => {
  const { id } = req.params;
  const { title, description, amount, date, type, category } = req.body;

  try {
    const income = await IncomeSchema.findById({ _id: id});
    if (!income) {
      return res.status(404).json({ message: 'Income not found' });
    }

    income.title = title;
    income.description = description;
    income.amount = amount;
    income.date = date;
    income.type = type;
    income.category = category;

    await income.save();

    res.status(200).json({ message: 'Income updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};