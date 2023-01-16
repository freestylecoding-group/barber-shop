import { pool } from "../../config/db.js";
import { newId } from "../helpers/generateUUID.main.js";

export class User{
    constructor(name, email, password, phone, idTypeUser){
        this.idUser = newId(),
        this.name = name,
        this.email = email,
        this.password = password,
        this.phone = phone,
        this.idTypeUser = idTypeUser
    }
    getUser(){
        return {
            iduser: this.idUser,
            name: this.name,
            email: this.email
        };
    }
    async insertUserInDB  (){
        const inserUser = await pool.query('')
    }
}
