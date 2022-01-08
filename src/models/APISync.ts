import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

interface HasID {
	id?: number;
}

export class APISync<T extends HasID> {
  constructor(public rootURL: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      // data already exist in db, update the data
      // put
      return axios.put(`${this.rootURL}/${id}`, data);
    } else {
      // data doesn't exist in db, create a new one
      // post
      return axios.post(this.rootURL, data);
    }
  }
}
