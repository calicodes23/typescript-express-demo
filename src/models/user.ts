import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  student: Boolean,
});

userSchema.statics.findByLogin = async function (login: string) {
  console.log(`LOG: userSchema -> findByLogin -> this`, this);

  let user = await this.findByLogin({
    username: login,
  });

  if (!user) {
    user = await this.findOne({
      email: login,
    });
  }

  return user;
};

// cascade delete for all messages in relation to the user
userSchema.pre("remove", function (next) {
  this.model("Message").deleteMany({ user: this._id }, next);
});

const User = mongoose.model("user", userSchema);

export default User;
