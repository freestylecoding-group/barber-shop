import { Employee } from "../models/Users/Employee.js";
import { User } from "../models/Users/User.js";

export const getSchedules = (req, res) =>{
    const serviceId = req.query.serviceId; 
    const employeeId = req.query.employeeId; 
    const employee = new Employee('Juan', 'niidea@gamil.com', null, null, null);
    
    res.json(employee.getUser());
}