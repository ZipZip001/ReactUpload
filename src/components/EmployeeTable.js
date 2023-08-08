import React, { useEffect, useState } from 'react';
import { getAllEmployee, deleteEmployee, addEmployee, updateEmployee } from '../api/employeeAPI'; 

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '',firstname: '',lastname: '' });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getAllEmployee();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await addEmployee(newEmployee);
      setEmployees([...employees, response.data]);
      setNewEmployee({ name: '', email: '',firstname: '',lastname: '' });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await updateEmployee(id, newEmployee);
      fetchEmployees();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2>Employee Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                <button onClick={() => handleUpdate(employee.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add Employee</h2>
      <input
        type="text"
        placeholder="First Name"
        value={newEmployee.firstname}
        onChange={(e) => setNewEmployee({ ...newEmployee, firstname: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={newEmployee.lastname}
        onChange={(e) => setNewEmployee({ ...newEmployee, lastname: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newEmployee.email}
        onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default EmployeeTable;
