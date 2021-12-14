import { IName } from "./Name";

export interface IUser {
  id: number;
  token: string,
  name: IName;
  login: string;
  password: string;
}
