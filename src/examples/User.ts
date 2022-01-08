import { Eventing } from "../models/Eventing";
import { APISync } from "../models/APISync";
import { Attributes } from "../models/Attributes";
import { Model } from "../models/Model";
import { Collection } from "../models/Collection";

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

  public setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({age});
  }
}
