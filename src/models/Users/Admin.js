import { pool } from "../../../config/db";

export class Customer extends User{
    constructor(){
        this.admins = []
    }
    async newAdmin(name, email, password, phone){
        let id= newId();
        this.admins.push({id, name, email, password, phone, typeUser: 2})
        await pool.query(`call newAdmin(${id}, ${name}, ${email}, ${password}, ${phone}, 1)`)
    }

    async getAdmins(){
        if(this.employees === null || this.employees === []) this.employees = await pool.query(`call getEmployees()`);
        return this.employees;
    }
    async getAdmin(idAdmin){
        const response = await pool.query(`call getAdmin(${idAdmin})`);
        return response;
    }

    async removeAdmin(idAdmin){
        const response = await pool.query(`call removeEmployee(${idEmployee})`);
        return response;
    }
    
    // async getSchedule(idAdmin){
    //     const schedule = await pool.query(`call getSchedule(${idAdmin})`);
    //     const randomSchedule ={
    //         month: 1,
    //         day: 14,
    //         disableDays: [1, 8, [15,30]],
    //         disableHours: [['08:00', '08:55'], ['09:00', '09:55']]
    //     }
    //     return schedule;
    // }
}