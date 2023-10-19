    import mongoose from "mongoose";

    const IncomeSchema = new mongoose.Schema(
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
        maxlength: [20, "Amount can not be more than 20 characters"],
        },

        type: {
        type: String,
        default: "income",
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
        required: true,
        }
        
    },

    { timestamps: true }

    );

export default mongoose.model("Income", IncomeSchema);