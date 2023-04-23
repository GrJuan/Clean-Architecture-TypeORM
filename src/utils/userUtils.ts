import { User } from "../entity/Important/User";

export function setUserPropertiesFromRequestBody(user: User, body: any): void {
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.age = body.age;
    user.documentNumber = body.documentNumber;
    user.phoneNumber = body.phoneNumber;
  }