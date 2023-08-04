import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    googleId: { type: String, required: true },
    gmail: { type: String, required: true },
    displayName: { type: String, required: true },
    image: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", UserSchema);

export default User;