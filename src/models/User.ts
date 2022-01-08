import { Eventing } from "./Eventing";
import { APISync } from "./APISync";
import { Attributes } from "./Attributes";
import { Model } from "./Model";

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

  public isAdminUser(): boolean {
    return this.get('id') === 1;
  }
}
