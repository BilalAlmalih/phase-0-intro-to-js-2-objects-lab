// Initialize the employee object
const employee = {
  name: "Bilal",
  streetAddress: "somewhere",
};

// Function: updateEmployeeWithKeyAndValue()
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return {
    ...employee,
    [key]: value,
  };
};

// Function: destructivelyUpdateEmployeeWithKeyAndValue()
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

// Function: deleteFromEmployeeByKey()
const deleteFromEmployeeByKey = (employee, key) => {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
};

// Function: destructivelyDeleteFromEmployeeByKey()
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};
