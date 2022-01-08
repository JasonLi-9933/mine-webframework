import { UserForm } from "./examples/UserForm";
import { User } from "./examples/User";
import { UserEdit } from "./examples/UserEdit";
import { UserList } from "./examples/UserList";
import { Collection } from "./models/Collection";
import { UserProps } from "./examples/User";
import { CollectionView } from "./views/CollectionView";

const root = document.querySelector("#root");
const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);
if (root) {
  users.on("change", () => {
    const usersListView = new UserList(root, users);
    usersListView.render();
  });
  users.fetch();
}
