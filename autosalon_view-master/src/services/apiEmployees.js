import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

// Отримати всіх працівників
export const getEmployee = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employee`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Отримати працівника за його ідентифікатором
export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employee/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getEmployeesWithPosition = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employee/with-position`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


// Створити працівника
export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/employee`, employeeData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getEmployeesByFullName = async (data) => {
  try {
    console.log(data)
    const response = await axios.get(`${API_BASE_URL}/employee/search?name1=${data.name1}&name2=${data.name2}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Оновити працівника
export const updateEmployee = async (id, employeeData) => {
  console.log(id, employeeData)
  try {
    const response = await axios.put(`${API_BASE_URL}/employee/${id}`, employeeData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Видалити працівника за його ідентифікатором
export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/employee/${id}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
