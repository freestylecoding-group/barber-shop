import { User } from "../models/User.js";

export const getSchedules = (req, res) =>{
    const serviceId = req.query.serviceId; 
    const employeeId = req.query.employeeId; 
    const user = new User('Juan', 'niidea@gamil.com', null, null, null);
    
    res.json(user.getUser());
}