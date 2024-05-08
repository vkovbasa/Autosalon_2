import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

// Отримати всіх клієнтів
export const getClients = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/clients`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Отримати окреме бронювання за його ідентифікатором
export const getClientById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/clients/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getClientsByFullNameLike = async (data) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/clients/search?keyword=${data.keyword}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


// Створити нове бронювання
export const createClient = async (clientData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/clients`, clientData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Оновити існуюче бронювання
export const updateClient = async (id, clientData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/clients/${id}`, clientData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Видалити клієнта за його ідентифікатором
export const deleteClient = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/clients/${id}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
