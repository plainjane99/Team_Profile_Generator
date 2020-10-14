// Employee parent class in which Manager, Engineer, Intern classes will extend
class Employee {

    // All Employees will have Name, ID, and Email info
    constructor(fullname, id, email) {
        this.fullname = fullname;
        this.id = id;
        this.email = email;
    }

    getName() {
        return { fullname: this.fullname };
    }
    getId() {
        return { id: this.id };
    }
    getEmail() {
        return { email: this.email };
    }
    getRole() {
        return 'employee';
    }

}

module.exports = Employee;