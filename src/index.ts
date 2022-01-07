import { User } from "./models/User";

const user = new User({ name: "Claire", id: 1 });

user.on("change", () => {
  console.log("change event!! we might need to change some HTML");
	console.log(user);
});
user.on('save', () => {
	console.log(user);
})
// user.set({name: 'new name', id: 1})
// user.fetch();
user.save();
