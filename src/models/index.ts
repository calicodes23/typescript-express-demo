import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  student: Boolean,
});

const User = mongoose.model("user", userSchema);

export default User;
