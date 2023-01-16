import { scheduler } from "timers/promises";
import { pool } from "../../../config/db.js";
import { User } from "./User.js";

export class Employee extends User {
    constructor(name, email, password, phone){
        super(name, email, password, phone);
        this.typeUser = 2;
    }
    
    async getSchedule(){
        //await pool.query(`call getSchedule(${this.idUser}})`);
        const schedule ={
            month: 1,
            day: 14,
            disableDays: [1, 8, [15,30]],
            disableHours: [['08:00', '08:55'], ['09:00', '09:55']]
        }
        return schedule;
    }
}