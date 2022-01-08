import { Model } from "../models/Model";


export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.model.on("change", () => {
      console.log("something has changed");
      this.render();
    });
  }

  abstract template(): string;

  // OPTIONAL
  // eventsMap can be overwritten to register event handlers
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  // OPTIONAL
  // regionsMap can be overwritten to render child components
  regions: { [regionName: string]: Element } = {};
  regionsMap(): { [regionName: string]: string } {
    return {};
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split("@");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let regionName in regionsMap) {
      const selector = regionsMap[regionName];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[regionName] = element;
      }
    }
  }

	// OPTIONAL
	// get called to render child components, aka regions
	// can be overwritten
	onRender = () => {}

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
		this.onRender();
    this.parent.append(templateElement.content);
  }
}
