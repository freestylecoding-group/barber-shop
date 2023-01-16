import { User } from "./User";

export class Customer extends User{
    constructor(name, email, pasword, phone){
        super(name, email, pasword, phone);
        this.typeUser = 3;
    }
}