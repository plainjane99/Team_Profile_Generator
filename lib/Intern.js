// ============================= imports go here ============================== //
const Employee = require('./Employee');
// ============================= imports go here ============================== //

// Engineer class uses Employee class as a blueprint
class Intern extends Employee {

    constructor(name, id, email, school) {

        // call to parent constructor here
        super(name, id, email);

        // Manager class also includes an office number
        this.school = school;

    }

    getSchool() {
        return { school: this.school };
    }

    // this method overwrites default Employee role with Intern role
    getRole(){
        return 'intern';
    }
    
}

module.exports = Intern;