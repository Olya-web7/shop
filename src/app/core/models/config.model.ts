import { User } from "./user.model";

export interface Config extends User{
  sessionId: string;
}