import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

// Отримати всіх клієнтів
export const getCars = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Отримати окреме бронювання за його ідентифікатором
export const getCarsById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCarsBetweenDates = async (data) => {
  try {
    console.log(data)
    console.log(`${API_BASE_URL}/cars/between-dates?startDate=${data.startDate}&endDate=${data.endDate}`)
    const response = await axios.get(`${API_BASE_URL}/cars/between-dates?startDate=${data.startDate}&endDate=${data.endDate}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCarsByBrands = async (brands) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars/brands?brandName=${brands.brandName}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getDistinctBrands = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars/distinct-brands`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getMinPrice = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars/min-price`);
    return [{ minPrice: response.data.minPrice }]; // Зміна формату даних на масив з одним об'єктом
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getBrandAndCount = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars/brand-count`);
    return response.data.map(item => ({ brand: item[0], count: item[1] }));
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCarsWithPriceGreaterThanAverage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars/price-greater-than-average`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCarsWithPriceGreaterThanAnySalePrice = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars/price-greater-than-any-sale-price`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCarsWithSale = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars/with-sale`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


// Створити нове бронювання
export const createCars = async (clientData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cars`, clientData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Оновити існуюче бронювання
export const updateCars = async (id, clientData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/cars/${id}`, clientData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Видалити клієнта за його ідентифікатором
export const deleteCars = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/cars/${id}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
