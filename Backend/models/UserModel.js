import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  profilePicture: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Email not registered");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

userSchema.statics.checkUser = async function (email) {
  if (!email) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Email not registered");
  }

  return user;
};

export default mongoose.model("User", userSchema);
