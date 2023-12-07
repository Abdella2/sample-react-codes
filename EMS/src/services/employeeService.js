import http from './httpService';

const apiEndpoint = 'http://localhost:4000/api/employees';

export function getEmployees() {
  return http.get(apiEndpoint);
}
export function getEmployee(id) {
  return http.get(`${apiEndpoint}/${id}`);
}
export function saveEmployee(employee) {
  if (employee._id) {
    delete employee._id;
    return http.put(`${apiEndpoint}/${employee.id}`, employee);
  }
  return http.post(apiEndpoint, employee);
}
export function deleteEmployee(employeeId) {
  return http.delete(`${apiEndpoint}/${employeeId}`);
}
