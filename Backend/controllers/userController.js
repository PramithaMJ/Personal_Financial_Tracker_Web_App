import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const signupUserFromFirebase = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signInfirebase = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const auth = async (req, res) => {
 //get from query
  const { email } = req.params;
  // console.log(email);
  try {

    const user = await User.checkUser(email);

    console.log(user);
    res.status(200).json({ email });

    

    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


/*
 const google = async (req, res) => {

  try {
    const user = await User.findOne({email, password});

    if(user){
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      const {password:hashedPassword, ...rest} = user._doc;
      const expiryDate = new Date(Number(new Date()) + 3600000);

      res.cookie('access_token', token, { httpOnly: true,
        expires:expiryDate })
        .status(200).json(rest);

    }else{
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        MAth.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
          username: req.body.name.splite(
            " ".join("").toLowerCase() + 
            Math.random().toString(36).slice(-8),
          ),
          email: req.body.email,
          password: hashedPassword,
          profilePicture: req.body.photo,
        });
        await newUser.save();
        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
        const {password:hashedPassword2, ...rest} = newUser._doc;
        const expiryDate = new Date(Number(new Date()) + 3600000);

        res.cookie('access_token', token, { httpOnly: true,
          expires:expiryDate })
          .status(200).json(rest);


    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
*/
export { loginUser, signupUser,signupUserFromFirebase ,signInfirebase ,auth};
