import { User } from "./models/User";

const user = new User({ name: "Claire", id: 1 });
// user.set({name: 'Bob', age: 111});

user.save();
