import { pool } from "../../../config/db.js";
import { newId } from "../../helpers/generateUUID.main.js";
import { User } from "./User.js";

export class Employee {
    constructor(){
        this.employees = []
    }
    async newEmployee(name, email, password, phone){
        let id= newId();
        this.employees.push({id, name, email, password, phone, typeUser: 2})
        await pool.query(`call newEmployee(${id}, ${name}, ${email}, ${password}, ${phone}, 2)`)
    }

    async getEmployees(){
        if(this.employees === null || this.employees === []) this.employees = await pool.query(`call getEmployees()`);
        return this.employees;
    }
    async getEmployee(idEmployee){
        const respone = await pool.query(`call getEmployee(${idEmployee})`)
    }

    async removeEmployee(idEmployee){
        const response = await pool.query(`call removeEmployee(${idEmployee})`);
        return response;
    }
    
    async getSchedule(idEmployee){
        const schedule = await pool.query(`call getSchedule(${idEmployee})`);
        const randomSchedule ={
            month: 1,
            day: 14,
            disableDays: [1, 8, [15,30]],
            disableHours: [['08:00', '08:55'], ['09:00', '09:55']]
        }
        return schedule;
    }
}