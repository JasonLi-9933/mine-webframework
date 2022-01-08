import { Eventing } from "./Eventing";
import { APISync } from "./APISync";
import { Attributes } from "./Attributes";
import { Model } from "./Model";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootURL = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    // here is calling constructor of parent class Model
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new APISync<UserProps>(rootURL)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootURL,
      (json: UserProps) => User.buildUser(json)
    );
  }

  public isAdminUser(): boolean {
    return this.get("id") === 1;
  }
}
