import * as gender from './fakeGenderService';
const employees = [
  {
    _id: '6540f7295c3acd9dcec70c5e',
    employeeNo: 'EMP012',
    name: 'John+',
    email: 'ab@gm',
    gender: {
      _id: '654131a7145f835973cf5e1d',
      name: 'Male'
    },
    isLiked: true
  },
  {
    _id: '6540f7295c3acd9dcec70c5d',
    employeeNo: 'EMP055',
    name: 'Doe',
    email: 'doe@gmail.com',
    gender: {
      _id: '654131a7145f835973cf5e1',
      name: 'Female'
    },
    isLiked: true
  },
  {
    _id: '6540f7295c3acd9dcec70c51',
    employeeNo: 'EMP055',
    name: 'Doe',
    email: 'doe@gmail.com',
    gender: {
      _id: '654131a7145f835973cf5e1',
      name: 'Female'
    }
  },
  {
    _id: '6540f7295c3acd9dcec70c5a',
    employeeNo: 'EMP055',
    name: 'Doe',
    email: 'doe@gmail.com',
    gender: {
      _id: '654131a7145f835973cf5e1',
      name: 'Female'
    }
  },
  {
    _id: '6540f7295c3acd9dcec70c5b',
    employeeNo: 'EMP055',
    name: 'Doe',
    email: 'doe@gmail.com',
    gender: {
      _id: '654131a7145f835973cf5e1',
      name: 'Female'
    }
  },
  {
    _id: '6540f7295c3acd9dcec70c5c',
    employeeNo: 'EMP055',
    name: 'Doe',
    email: 'doe@gmail.com',
    gender: {
      _id: '654131a7145f835973cf5e1d',
      name: 'Male'
    }
  },
  {
    _id: '6540f7295c3acd9dcec70c2a',
    employeeNo: 'EMP055',
    name: 'Doe',
    email: 'doe@gmail.com',
    gender: {
      _id: '654131a7145f835973cf5e1d',
      name: 'Male'
    }
  }
];

export function getEmployees() {
  return employees;
}

export function getEmployee(id) {
  return employees.find((e) => e._id === id);
}

export function saveEmployee(emp) {
  const employee = employees.find((e) => e._id === emp.id) || {};

  employee.employeeNo = emp.employeeNo;
  employee.name = emp.name;
  employee.email = emp.email;
  employee.gender = gender.getGender(emp.genderId);

  if (!employee._id) {
    employee._id = Date.now().toString();
    employees.push(employee);
  }

  return employee;
}

export function deleteEmployee(id) {
  const employeeInDb = employees.find((e) => e._id === id);
  employees.splice(employees.indexOf(employeeInDb), 1);

  return employeeInDb;
}
