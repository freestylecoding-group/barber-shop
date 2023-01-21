import { pool } from "../../config/db.js";
import { newId } from "../helpers/generateUUID.main.js";

export class Booking {
    constructor(){
        this.bookings = [];
    }

    async newBooking(idService, idEmployee, idCustomer, date, schedule){
        id = newId();
        const response = await pool.query(`call newBooking(${id}, ${idService}, ${idEmployee}, ${idCustomer}, ${date}, ${schedule})`);
        return response;
        }
    async getBooking(idBooking){
        const response = await pool.query(`call getBooking(${idBooking})`);
        return response;
    }

    // async insertInDB(){
    //     await pool.query(`call insertNewBooking(${this.id}, ${this.idService}, ${this.idEmployee}, ${this.idCustomer}, ${this.date}, ${this.schedule})`)
    // }
    async removeBooking(){

    }
}