import models from "./config/connection";

const createUserWithMessages = async () => {
  // creating users
  const charlie = new models.User({
    username: "charlie_kelly",
  });

  const rupaul = new models.User({
    username: "rupaul_charles",
  });

  const tom = new models.User({
    username: "tom_nook",
  });

  // creating messages with user relations
  const charlieMessage = new models.Message({
    text: `Dayman (ah-ah-ah)
    Fighter of the Nightman (ah-ah-ah)`,
    user: charlie._id,
  });

  const rupaulMessage = new models.Message({
    text: `Shantay you stay`,
    user: rupaul._id,
  });

  const tomMessage = new models.Message({
    text: "if you want to move your house, it will cost 30,000 bells",
    user: tom._id,
  });

  // saving messages
  await charlieMessage.save();
  await rupaulMessage.save();
  await tomMessage.save();

  // saving users
  await charlie.save();
  await rupaul.save();
  await tom.save();
};

export default createUserWithMessages;
