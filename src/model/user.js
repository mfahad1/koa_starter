import mongoose from '../config/database';

const schema = mongoose.Schema({
  username: String,
  password: String
})

export default mongoose.model('user', schema);