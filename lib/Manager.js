// ============================= imports go here ============================== //
const Employee = require('./Employee');
// ============================= imports go here ============================== //

// Manager class uses Employee class as a blueprint
class Manager extends Employee {

    constructor(name, id, email, phone) {

        // call to parent constructor here
        super(name, id, email);

        // Manager class also includes an office number
        this.officeNumber = phone;

    }

    // this method overwrites default Employee role with Manager role
    getRole(){
        return 'manager';
    }
    
}

module.exports = Manager;