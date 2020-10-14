const { test, expect } = require('@jest/globals');
// ============================= imports go here ============================== //
const { TestScheduler } = require('jest');

const Employee = require('../lib/Employee.js');
// ============================= imports go here ============================== //

test('creates an employee object', () => {
    const employee = new Employee('Jane Hsu', 12345, "jane@gmail.com");

    expect(employee.fullname).toEqual(expect.any(String));
    expect(employee.fullname).toMatch(/ /);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch(/@/ && /./);
});

test("gets employee name", () => {
    const employee = new Employee('Jane Hsu', 12345, "jane@gmail.com");

    expect(employee.getName()).toHaveProperty('fullname');
})

test("gets employee id number", () => {
    const employee = new Employee('Jane Hsu', 12345, "jane@gmail.com");

    expect(employee.getId()).toHaveProperty('id');
})

test("gets employee email", () => {
    const employee = new Employee('Jane Hsu', 12345, "jane@gmail.com");

    expect(employee.getEmail()).toHaveProperty('email');
})

test("gets employee role", () => {
    const employee = new Employee('Jane Hsu', 12345, "jane@gmail.com");

    expect(employee.getRole()).toEqual(expect.any(String));
})