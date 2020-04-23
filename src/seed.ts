import models from "./config/connection";

const createUserWithMessages = async () => {
  console.log(`\n\n LOG: SEED inside create With User Message`);
  // creating users
  const charlie = new models.User({
    username: "charlie_kelly",
    catchPhrase: `Dayman (ah-ah-ah)
    Fighter of the Nightman (ah-ah-ah)`,
  });

  const rupaul = new models.User({
    username: "rupaul_charles",
    catchPhrase: `Catagory is: Typescript Realness`,
  });

  const tom = new models.User({
    username: "tom_nook",
    catchPhrase: "This TypeScript lesson will cost 1,000,000 bells",
  });

  // saving users
  console.log(`LOG: saving users`);
  await charlie.save();
  await rupaul.save();
  await tom.save();
  console.log(`LOG: users saved`);
};

export default createUserWithMessages;
