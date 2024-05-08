import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

// Отримати всіх клієнтів
export const getCarsCategory = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/car-categories`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Отримати окреме бронювання за його ідентифікатором
export const getCarsCategoryById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/car-categories/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Створити нове бронювання
export const createCarsCategory = async (clientData) => {
    try {
        console.log(clientData)
        const response = await axios.post(`${API_BASE_URL}/car-categories`, clientData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Оновити існуюче бронювання
export const updateCarsCategory = async (id, clientData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/car-categories/${id}`, clientData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Видалити клієнта за його ідентифікатором
export const deleteCarsCategory = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/car-categories/${id}`);
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
