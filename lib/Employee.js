// Employee parent class in which Manager, Engineer, Intern classes will extend
class Employee {

    // All Employees will have Name, ID, and Email info
    constructor(fullname, id, email) {
        this.fullname = fullname;
        this.id = id;
        this.email = email;
    }

    // these methods return information input through command line
    getName() {
        return `${this.fullname}`;
    }
    getId() {
        return `${this.id}`;
    }
    getEmail() {
        return `${this.email}`;
    }
    getRole() {
        return 'Employee';
    }

}

module.exports = Employee;