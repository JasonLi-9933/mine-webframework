import { Model } from "../models/Model";
import { User, UserProps } from "./User";
import { View } from "../views/View";

export class UserForm extends View<User, UserProps> {
  setRandomAge = (): void => {
    console.log(this.model);
    this.model.setRandomAge();
  };

  onChangeName = (): void => {
    let input = this.parent.querySelector("input");
    if (input) {
      const newName = input.value;
      this.model.set({ name: newName });
    }
  };

  onSave = (): void => {
    console.log("Save");
    this.model.save();
  };

  eventsMap(): { [ket: string]: () => void } {
    return {
      "click@button.random-age": this.setRandomAge,
      "click@button.change-name": this.onChangeName,
      "click@button.save": this.onSave,
    };
  }

  template(): string {
    return `
			<div>
				<input placeholder="${this.model.get("name")}"/>
				<button class="change-name">Change Name</button>
				<button class="random-age">Set Random Age </button>
				<button class="save">Save</button>
			</div>
		`;
  }
}
