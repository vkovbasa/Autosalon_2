import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const getSales = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sale`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getSaleById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sale/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getTotalSalePrice = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sale/total-sale-price`);
    return [{ totalSalePrice: response.data.totalSalePrice }];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const countDistinctOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sale/distinct-orders-count`);
    return [{ distinctOrdersCount: response.data }];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getSalesWithTotalPriceGreaterThan = async (totalPrice) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sale/total-price-greater-than?totalPrice=${totalPrice.totalPrice}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getSalesByTotalSalePriceGreaterThan = async (totalPrice) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sale/total-sale-price-greater-than?totalPrice=${totalPrice}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getSalesWithTotalSalePrice = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sale/with-total-sale-price`);
    const result = response.data.map(item => {
      return {
        id: item[0],
        dateOfSale: item[1],
        totalSalePrice: item[2]
      };
    });

    console.log(result)
    return result;

  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getSalesWithTotalSalePriceGreaterThanAverage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sale/total-sale-price-greater-than-average`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getSalesWithEmployeeAndCar = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sale/with-employee-and-car`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};




export const createSale = async (clientData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/sale`, clientData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateSale = async (id, clientData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/sale/${id}`, clientData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteSale = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/sale/${id}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
