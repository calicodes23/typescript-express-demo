import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  catchPhrase: String,
});

const User = mongoose.model("user", userSchema);

export default User;
