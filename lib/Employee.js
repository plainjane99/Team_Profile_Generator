// Employee parent class in which Manager, Engineer, Intern classes will extend
class Employee {

    // All Employees will have Name, ID, and Email info
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // these methods return information input through command line
    getName() {
        return `${this.name}`;
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