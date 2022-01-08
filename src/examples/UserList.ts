import { Collection } from "../models/Collection";
import { User, UserProps } from "./User";
import { CollectionView } from "../views/CollectionView";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
	renderItem(model: User, itemParent: Element): void {
		new UserShow(itemParent, model).render();
	}
}