import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

// Отримати всіх клієнтів
export const getOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Отримати окреме бронювання за його ідентифікатором
export const getOrderById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTotalOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/total-orders`);
    return [{ totalOrders: response.data }];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTotalSalePriceByStatus = async (status) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/total-sale-price?status=${status}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getOrdersWithCarDetails = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/with-car-details`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getOrdersWithCarDetailsByBrand = async (brand) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/with-car-details-by-brand?brand=${brand.brand}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getOrdersWithCarDetailsByModelContaining = async (keyword) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/with-car-details-by-model?keyword=${keyword.keyword}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getOrdersWithSales = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/with-sales`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};



export const getOrdersByDateAndStatus = async (data) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/by-date-and-status?date=${data.date}&status=${data.status}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


// Створити нове бронювання
export const createOrder = async (clientData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, clientData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Оновити існуюче бронювання
export const updateOrder = async (id, clientData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/orders/${id}`, clientData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Видалити клієнта за його ідентифікатором
export const deleteOrder = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/orders/${id}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
