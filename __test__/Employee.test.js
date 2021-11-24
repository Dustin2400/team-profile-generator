const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('David', 1, 'Dave@fakemail.com', 303);
    expect(employee.name).toBe('David');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('Dave@fakemail.com');
});

test('gets employee name', () => {
    const employee = new Employee('David', 1, 'Dave@fakemail.com', 303);
    expect(employee.getName()).toBe('David');
});


test('gets employee id', () => {
    const employee = new Employee('David', 1, 'Dave@fakemail.com', 303);
    expect(employee.getId()).toBe(1);
});

test('gets employee email', () => {
    const employee = new Employee('David', 1, 'Dave@fakemail.com', 303);
    expect(employee.getEmail()).toBe('Dave@fakemail.com');
});

test('gets employee role', () => {
    const employee = new Employee('David', 1, 'Dave@fakemail.com', 303);
    expect(employee.getRole()).toBe('Employee');
});