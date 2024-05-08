import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
const ViewsPage = () => {
  return (
    <div>
      <h2>Views</h2>
      <ul>
        <li>
          <Link to="/views/get-all-cars">get All Cars</Link>
        </li>
        <li>
          <Link to="/views/get-cars-between-dates">get Cars Between Dates</Link>
        </li>
        <li>
          <Link to="/views/get-cars-by-brands">getCarsByBrands</Link>
        </li>
        <li>
          <Link to="/views/get-clients-by-full-name-like">getClientsByFullNameLike</Link>
        </li>
        <li>
          <Link to="/views/getOrdersByDateAndStatus">getOrdersByDateAndStatus</Link>
        </li>
        <li>
          <Link to="/views/getEmployeesByFullName">getEmployeesByFullName</Link>
        </li>
        <li>
          <Link to="/views/getDistinctBrands">getDistinctBrands</Link>
        </li>
        <li>
          <Link to="/views/min-price">min-price</Link>
        </li>
        <li>
          <Link to="/views/total-sale-price">total-sale-price</Link>
        </li>
        <li>
          <Link to="/views/total-orders">total-orders</Link>
        </li>
        <li>
          <Link to="/views/brand-and-count">brand-and-count</Link>
        </li>
        <li>
          <Link to="/views/total-sale-price">total-sale-price</Link>
        </li>
        <li>
          <Link to="/views/distinct-orders-count">distinct-orders-count</Link>
        </li>
        <li>
          <Link to="/views/sales-with-total-price-greater-than">sales-with-total-price-greater-than</Link>
        </li>
        <li>
          <Link to="/views/orders-with-car-details">orders-with-car-details</Link>
        </li>
        <li>
          <Link to="/views/employees-with-position">employees-with-position</Link>
        </li>
        <li>
          <Link to="/views/positions-with-employees">positions-with-employees</Link>
        </li>
        <li>
          <Link to="/views/orders-with-car-details-by-brand">orders-with-car-details-by-brand</Link>
        </li>
        <li>
          <Link to="/views/orders-with-car-details-by-model">orders-with-car-details-by-model</Link>
        </li>
        <li>
          <Link to="/views/sales-with-total-sale-price">sales-with-total-sale-price</Link>
        </li>
        <li>
          <Link to="/views/sales-by-total-sale-price-greater-than">sales-by-total-sale-price-greater-than</Link>
        </li>
        <li>
          <Link to="/views/cars-with-price-greater-than-average">cars-with-price-greater-than-average</Link>
        </li>
        <li>
          <Link to="/views/sales-with-total-sale-price-greater-than-average">sales-with-total-sale-price-greater-than-average</Link>
        </li>
        <li>
          <Link to="/views/orders-with-sales">orders-with-sales</Link>
        </li>
        <li>
          <Link to="/views/cars-with-price-greater-than-any-sale-price">cars-with-price-greater-than-any-sale-price</Link>
        </li>
        <li>
          <Link to="/views/cars-with-sale">cars-with-sale</Link>
        </li>
        <li>
          <Link to="/views/sales-with-employee-and-car">sales-with-employee-and-car</Link>
        </li>
      </ul>
    </div>
  );
};


export default ViewsPage;
