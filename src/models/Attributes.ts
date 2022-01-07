export class Attributes<T> {
  constructor(private data: T) {}

  /**
   *    key values of JS objects are string
   * 		string can be types in TS
   * 1. K is just another generic constraint like T
   * 2. K can only be one of the key values of T
   * 3. return type of `get` is definitive with a given key
   */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set = (update: T): void => {
    Object.assign(this.data, update);
  }

	getAll = (): T => {
		return this.data
	}
}
