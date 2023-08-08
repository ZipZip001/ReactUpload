import React, { useState } from 'react';
import { getOneEmployee } from '../api/employeeAPI'; 

const FindEmployee = () => {
  const [id, setEmployeeId] = useState('');
  const [employeeData, setEmployeeData] = useState(null);

  const fetchEmployeeData = async () => {
    try {
      const response = await getOneEmployee(id);
      setEmployeeData(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  return (
    <div>
      <h2>Find Employee by ID</h2>
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button onClick={fetchEmployeeData}>Search</button>
      {employeeData && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employeeData.id}</td>
              <td>{employeeData.firstname}</td>
              <td>{employeeData.lastname}</td>
              <td>{employeeData.email}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FindEmployee;
