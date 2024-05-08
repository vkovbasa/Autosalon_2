import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const getPositions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/positions`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getPositionById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/positions/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getPositionsWitheEmployees = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/positions/with-employees`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


export const createPosition = async (positionData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/positions`, positionData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updatePosition = async (id, positionData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/positions/${id}`, positionData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deletePosition = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/positions/${id}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
