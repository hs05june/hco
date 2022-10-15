import Shop from '../../models/shop';
import Employee from '../../models/employee';
import utils from '../../utils/utils';

export default async function handler(req, res) {
    const auth = await utils.auth(req);
    if (auth === undefined) {
        res.status(403).json({status: "JWT missing"});
        return;
    }
    if (auth === null) {
        res.status(403).json({status: "JWT verification failed"});
        return;
    }
    const missing = utils.validate(req, ['shopID']);
    if (missing != -1) {
        res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
        return;
    }
    const {shopID} = req.body;
    const shop = await Shop.findById(shopID);
    if (shop === null) {
        res.status(404).json({status: `No shop found with id ${id}`});
        return;
    }
    if (!shop.owners.includes(auth.userId)) {
        res.status(403).json({status: `User ${auth.userId} is not authorized to access Shop ${id}`});
        return;
    }
    if (req.method === "POST") {
        const requiredFields = ['name', 'salary', 'paymentInterval'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {name, salary, paymentInterval} = req.body;
        if (paymentInterval !== 'daily' && paymentInterval !== 'weekly' && paymentInterval !== 'monthly') {
            res.status(400).json({status: "paymentInterval must be daily, weekly or monthly"});
            return;
        }
        const employee = await Employee.create({name: name, shopID: shopID, salary: salary, paymentInterval: paymentInterval});
        shop.employees.push(employee._id);
        await shop.save();
        res.status(200).json({status: "OK", data: {
            _id: employee._id.toString(),
            name: employee.name,
            shopID: employee.shopID.toString(),
            salary: employee.salary,
            paymentInterval: employee.paymentInterval,
        }});
    } else if (req.method === "GET") {
        const requiredFields = ['employeeID'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {employeeID} = req.body;
        const employee = await Employee.findById(employeeID);
        if (employee === null) {
            res.status(404).json({status: `No Employee found with id ${employeeID}`});
            return;
        }
        if (employee.shopID.toString() !== shopID) {
            res.status(403).json({status: `Employee ${employeeID} does not work at Shop ${shopID}`});
            return;
        }
        res.status(200).json({status: "OK", data: {
            _id: employee._id.toString(),
            name: employee.name,
            shopID: employee.shopID.toString(),
            salary: employee.salary,
            paymentInterval: employee.paymentInterval,
        }});
    } else if (req.method === 'PUT' || req.method === 'PATCH') {
        const requiredFields = ['name', 'salary', 'paymentInterval', 'employeeID'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {name, salary, paymentInterval, employeeID} = req.body;
        if (paymentInterval !== 'daily' && paymentInterval !== 'weekly' && paymentInterval !== 'monthly') {
            res.status(400).json({status: "paymentInterval must be daily, weekly or monthly"});
            return;
        }
        const employee = await Employee.findById(employeeID);
        if (employee === null) {
            res.status(404).json({status: `No Employee found with id ${employeeID}`});
            return;
        }
        if (employee.shopID.toString() !== shopID) {
            res.status(403).json({status: `Employee ${employeeID} does not work at Shop ${shopID}`});
            return;
        }
        employee.name = name;
        employee.salary = salary;
        employee.paymentInterval = paymentInterval;
        await employee.save();
        res.status(200).json({status: "OK", data: {
            _id: employee._id.toString(),
            name: employee.name,
            shopID: employee.shopID.toString(),
            salary: employee.salary,
            paymentInterval: employee.paymentInterval,
        }});
    } else if (req.method === "DELETE") {
        const requiredFields = ['employeeID'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {employeeID} = req.body;
        const employee = await Employee.findById(employeeID);
        if (employee === null) {
            res.status(404).json({status: `No Employee found with id ${employeeID}`});
            return;
        }
        if (employee.shopID.toString() !== shopID) {
            res.status(403).json({status: `Employee ${employeeID} does not work at Shop ${shopID}`});
            return;
        }
        shop.employees.splice(shop.employees.indexOf(employee._id), 1);
        await shop.save();
        await Employee.findByIdAndDelete(employeeID);;
        res.status(200).json({status: "OK"});
    }
}