import React, { useState } from 'react';
import { updateEmployee } from '../api/employeeAPI'; 

const UpdateEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeData, setEmployeeData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const handleUpdate = async () => {
    try {
      const response = await updateEmployee(employeeId, employeeData);
      setEmployeeData(response.data);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        value={employeeData.firstname}
        onChange={(e) =>
          setEmployeeData({ ...employeeData, firstname: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={employeeData.lastname}
        onChange={(e) =>
          setEmployeeData({ ...employeeData, lastname: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={employeeData.email}
        onChange={(e) =>
          setEmployeeData({ ...employeeData, email: e.target.value })
        }
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateEmployee;
