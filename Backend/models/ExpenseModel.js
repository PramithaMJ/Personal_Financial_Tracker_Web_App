import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
{
    title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, "Title can not be more than 50 characters"],
    },
    
    amount: {
    type: Number,
    required: true,
    trim: true,
    maxlength: [20, "Amount can not be more than 8 characters"],
    },

    type: {
    type: String,
    default: "expense",
    },

    date: {
    type: Date,
    required: true,
    trim: true,
    },

    category: {
    type: String,
    required: true,
    trim: true,
    },

    description: {
    type: String,
    trim: true,
    },

    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    },
        
},

{ timestamps: true }

);

export default mongoose.model("Expense", ExpenseSchema);