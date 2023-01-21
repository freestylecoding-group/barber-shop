import { pool } from "../../config/db.js";
import { newId } from "../helpers/generateUUID.main.js";

export class Service{
    constructor(){
        this.services = [];
    }

    async newService(name, description, price, aproxDuration){
        id = newId();
        const response = await pool.query(`call newService(${id}, ${name}, ${description}, ${price}, ${aproxDuration})`);
        return response;
    }

    async getServices(){
        const response = await pool.query(`call getServices()`);
        return response;
    }

    async getService(idService){
        const response = await pool.query(`call getService(${idService})`);
        return response;
    }
    // async insertInDB(idAdmin){
    //     const respone =  await pool.query(`call insertNewService(${this.id}, ${this.name}, ${this.description}, ${this.price}, ${this.aproxDuration}, ${idAdmin})`);
    //     return respone
    // }

    async removeService(idAdmin){
        const response = await pool.query(`call removeService(${idAdmin})`);
    }
}