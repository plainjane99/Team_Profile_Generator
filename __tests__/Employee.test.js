const { test, expect } = require('@jest/globals');
// ============================= imports go here ============================== //
const { TestScheduler } = require('jest');

const Employee = require('../lib/Employee.js');
// ============================= imports go here ============================== //

test('creates an employee object', () => {
    const employee = new Employee('Jane Hsu', 12345, "jane@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name).toMatch(/ /);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch(/@/ && /./);
});