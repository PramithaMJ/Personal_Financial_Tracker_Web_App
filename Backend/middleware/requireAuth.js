import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';
import  dotenv from 'dotenv'

dotenv.config()

const requireAuth = async (req, res, next) => {

  const { authorization } = req.headers
  console.log(req.headers)
  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization;

  try {
    console.log(token)
    const { _id } = jwt.verify(token, process.env.JWT_SECRET)
    console.log(_id)
    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

export default requireAuth