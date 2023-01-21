import { User } from "./User";

export class Customer extends User{
    constructor(){
        this.customers = []
    }
    async newCustomer(name, email, password, phone){
        let id= newId();
        this.customers.push({id, name, email, password, phone, typeUser: 3})
        await pool.query(`call newEmployee(${id}, ${name}, ${email}, ${password}, ${phone}, 3)`)
    }

    async getCustomers(){
        if(this.customers === null || this.customers === []) this.customers = await pool.query(`call getCustomers()`);
        return this.customers;
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