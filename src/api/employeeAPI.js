import axios from "axios";
const baseUrl = "http://localhost:8080/api";

export const getAllEmployee = () => {
  try {
    const res = axios.get(baseUrl + '/employees'); 
    return res;
  } catch (error) {
    throw error;
  }
}

export const getOneEmployee = (id) => {
  try {
    const res = axios.get(baseUrl + '/employees/' + id); 
    return res;
  } catch (error) {
    throw error;
  }
}

export const addEmployee = (employeeData) => { 
  try {
    const res = axios.post(baseUrl + '/employees', employeeData); 
    return res;
  } catch (error) {
    throw error;
  }
}

export const updateEmployee = (id, employeeData) => { 
  try {
    const res = axios.put(baseUrl + '/employees/' + id, employeeData); 
    return res;
  } catch (error) {
    throw error;
  }
}

export const deleteEmployee = (id) => {
  try {
    const res = axios.delete(baseUrl + '/employees/' + id); 
    return res;
  } catch (error) {
    throw error;
  }
}
