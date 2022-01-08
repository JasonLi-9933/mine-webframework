import { User } from "./models/User";

const user = User.buildUser({ name: "Jay", age: 44, id: 1 });
user.on("change", () => {
  console.log("change");
  console.log(user);
});
user.get("id");
user.fetch();
