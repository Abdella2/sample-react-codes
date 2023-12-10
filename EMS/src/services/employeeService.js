import config from '../config.json';
import http from './httpService';

const apiEndpoint = `${config.baseUrl}/employees`;

export function getEmployees() {
  return http.get(apiEndpoint);
}

function employeeUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getEmployee(id) {
  return http.get(employeeUrl(id));
}

export function saveEmployee(employee) {
  if (employee._id) {
    delete employee._id;
    return http.put(employeeUrl(employee.id), employee);
  }
  return http.post(apiEndpoint, employee);
}
export function deleteEmployee(employeeId) {
  return http.delete(employeeUrl(employeeId));
}
