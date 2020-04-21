import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  catchphrase: String,
});

const User = mongoose.model("user", userSchema);

export default User;
