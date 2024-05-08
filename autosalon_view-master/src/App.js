import React from "react";
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import {createClient, deleteClient, getClients, getClientsByFullNameLike, updateClient} from './services/apiClients';
import {
    createEmployee,
    deleteEmployee,
    getEmployee,
    getEmployeesByFullName, getEmployeesWithPosition,
    updateEmployee
} from './services/apiEmployees';
import {
    createPosition,
    deletePosition,
    getPositions,
    getPositionsWitheEmployees,
    updatePosition
} from './services/apiPositions';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UniversalList from "./components/UniversalList";
import ViewsPage from "./components/ViewsPage";
import UniversalView from "./components/UniversalView";
import {
    createCars,
    deleteCars, getBrandAndCount,
    getCars,
    getCarsBetweenDates,
    getCarsByBrands,
    getDistinctBrands,
    getMinPrice,
    updateCars,
    getCarsWithPriceGreaterThanAverage,
    getCarsWithPriceGreaterThanAnySalePrice, getCarsWithSale
} from "./services/apiCars";
import {createCarsCategory, deleteCarsCategory, getCarsCategory, updateCarsCategory} from "./services/apiCarsCategory";
import {
    createOrder,
    deleteOrder,
    getOrders,
    getOrdersByDateAndStatus,
    getOrdersWithCarDetails,
    getOrdersWithCarDetailsByBrand,
    getOrdersWithCarDetailsByModelContaining,
    getTotalOrders,
    updateOrder,
    getOrdersWithSales
} from "./services/apiOrders";
import {
    countDistinctOrders,
    createSale,
    deleteSale,
    getSales,
    getSalesWithTotalPriceGreaterThan, getSalesWithTotalSalePrice,
    getTotalSalePrice,
    updateSale,
    getSalesWithTotalSalePriceGreaterThanAverage, getSalesWithEmployeeAndCar, getSalesByTotalSalePriceGreaterThan
} from "./services/apiSale";

// require('dotenv').config()

function App() {
    return (
        <Router forceRefresh={true}>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <a href="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</a>
                        </li>
                        <li>
                            <a href="/clients"
                               className={window.location.pathname === '/clients' ? 'active' : ''}>Clients</a>
                        </li>
                        <li>
                            <a href="/employee"
                               className={window.location.pathname === '/employee' ? 'active' : ''}>Employee</a>
                        </li>
                        <li>
                            <a href="/positions"
                               className={window.location.pathname === '/positions' ? 'active' : ''}>Positions</a>
                        </li>
                        <li>
                            <a href="/views" className={window.location.pathname === '/views' ? 'active' : ''}>Views</a>
                        </li>
                        <li>
                            <a href="/cars" className={window.location.pathname === '/cars' ? 'active' : ''}>Cars</a>
                        </li>
                        <li>
                            <a href="/cars-category"
                               className={window.location.pathname === '/cars-category' ? 'active' : ''}>Cars
                                Category</a>
                        </li>
                        <li>
                            <a href="/orders"
                               className={window.location.pathname === '/orders' ? 'active' : ''}>Orders</a>
                        </li>
                        <li>
                            <a href="/sale" className={window.location.pathname === '/sale' ? 'active' : ''}>Sale</a>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" element={
                        <h1>Welcome to AutoSalon</h1>
                    }/>


                    <Route path="/views" element={
                        <ViewsPage/>
                    }
                    />
                    <Route path="/views/get-all-cars" element={
                        <UniversalView
                            viewName="Get all cars"
                            columns={[
                                {Header: 'Ід', accessor: 'id'},
                                {Header: 'ціна', accessor: 'price'},
                                {Header: 'модель', accessor: 'model'},
                                {Header: 'дата випуску', accessor: 'dateOfIssue'},
                                {Header: 'індентифікатор категорії', accessor: 'categoryId'},
                                {Header: 'бренд', accessor: 'brand'},
                                {Header: 'опис', accessor: 'additionalInfo'},
                            ]}
                            fetchData={getCars}
                        />
                    }
                    />
                    <Route path="/views/get-cars-between-dates" element={
                        <UniversalView
                            viewName="Cars Between Dates"
                            columns={[
                                {Header: 'id', accessor: 'id'},
                                {Header: 'Brand', accessor: 'brand'},
                                {Header: 'Model', accessor: 'model'},
                                {Header: 'Category Name', accessor: 'category.categoryName'}, // Отримати categoryName з об'єкта category
                                {Header: 'Date of Issue', accessor: 'dateOfIssue'},
                                {Header: 'Price', accessor: 'price'},
                                {Header: 'Additional Info', accessor: 'additionalInfo'},
                            ]}
                            inputParams={[
                                {name: 'startDate', label: 'Start Date', type: 'date'},
                                {name: 'endDate', label: 'End Date', type: 'date'},
                            ]}
                            fetchData={getCarsBetweenDates}
                        />
                    }
                    />
                    <Route path="/views/get-cars-by-brands" element={
                        <UniversalView
                            viewName="Cars By Brands"
                            columns={[
                                {Header: 'id', accessor: 'id'},
                                {Header: 'Brand', accessor: 'brand'},
                                {Header: 'Model', accessor: 'model'},
                                {Header: 'Date of Issue', accessor: 'dateOfIssue'},
                                {Header: 'Price', accessor: 'price'},
                                {Header: 'Additional Info', accessor: 'additionalInfo'},
                            ]}
                            inputParams={[
                                {name: 'brandName', label: 'Brand Name', type: 'text'},
                            ]}
                            fetchData={getCarsByBrands}
                        />
                    }
                    />
                    <Route path="/views/get-clients-by-full-name-like" element={
                        <UniversalView
                            viewName="Clients By Full Name Like"
                            columns={[
                                {Header: 'id', accessor: 'id'},
                                {Header: 'Full Name', accessor: 'fullName'},
                                {Header: 'Address', accessor: 'address'},
                                {Header: 'Phone', accessor: 'phone'},
                                {Header: 'Email', accessor: 'email'},
                            ]}
                            inputParams={[
                                {name: 'keyword', label: 'Keyword', type: 'text'},
                            ]}
                            fetchData={getClientsByFullNameLike}
                        />
                    }
                    />
                    {/*5*/}
                    <Route path="/views/getOrdersByDateAndStatus" element={
                        <UniversalView
                            viewName="Orders By Date And Status"
                            columns={[
                                {Header: 'id', accessor: 'id'},
                                {Header: 'Car ID', accessor: 'car.id'},
                                {Header: 'Client ID', accessor: 'client.id'},
                                {Header: 'Employee ID', accessor: 'employee.id'},
                                {Header: 'Date Order', accessor: 'dateOrder'},
                                {Header: 'Order Status', accessor: 'orderStatus'},
                            ]}
                            inputParams={[
                                {name: 'date', label: 'Date', type: 'date'},
                                {name: 'status', label: 'Status', type: 'text'},
                            ]}
                            fetchData={getOrdersByDateAndStatus}
                        />
                    }
                    />
                    {/*6*/}
                    <Route path="/views/getEmployeesByFullName" element={
                        <UniversalView
                            viewName="Employees By Full Name"
                            columns={[
                                {Header: 'id', accessor: 'id'},
                                {Header: 'Full Name', accessor: 'fullName'},
                                {Header: 'Date of Birth', accessor: 'dateOfBirth'},
                                {Header: 'Phone', accessor: 'phone'},
                                {Header: 'Position ID', accessor: 'position.id'},
                            ]}
                            inputParams={[
                                {name: 'name1', label: 'Name 1', type: 'text'},
                                {name: 'name2', label: 'Name 2', type: 'text'},
                            ]}
                            fetchData={getEmployeesByFullName}
                        />
                    }
                    />
                    {/*7*/}
                    <Route path="/views/getDistinctBrands" element={
                        <UniversalView
                            viewName="Distinct Brands"
                            columns={[
                                {Header: 'Brand', accessor: 'brandName'},
                            ]}
                            fetchData={getDistinctBrands}
                        />
                    }
                    />
                    {/*8*/}
                    <Route path="/views/min-price" element={
                        <UniversalView
                            viewName="Min Price"
                            columns={[
                                {Header: 'Min Price', accessor: 'minPrice'},
                            ]}
                            fetchData={getMinPrice}
                        />
                    }
                    />
                    {/*9*/}
                    <Route path="/views/total-sale-price" element={
                        <UniversalView
                            viewName="Total Sale Price"
                            columns={[
                                {Header: 'Total Sale Price', accessor: 'totalSalePrice'},
                            ]}
                            fetchData={getTotalSalePrice}
                        />
                    }
                    />
                    {/*10*/}
                    <Route path="/views/total-orders" element={
                        <UniversalView
                            viewName="Total Orders"
                            columns={[
                                {Header: 'Total Orders', accessor: 'totalOrders'},
                            ]}
                            fetchData={getTotalOrders}
                        />
                    }
                    />


                    {/*11*/}
                    <Route path="/views/brand-and-count" element={
                        <UniversalView
                            viewName="Brand and Count"
                            columns={[
                                {Header: 'Brand', accessor: 'brand'},
                                {Header: 'Count', accessor: 'count'}
                            ]}
                            fetchData={getBrandAndCount}
                        />
                    }/>

                    {/*12*/}
                    <Route path="/views/total-sale-price" element={
                        <UniversalView
                            viewName="Total Sale Price"
                            columns={[
                                {Header: 'Total Sale Price', accessor: 'totalSalePrice'}
                            ]}
                            fetchData={getTotalSalePrice}
                        />
                    }/>

                    {/*13*/}
                    <Route path="/views/distinct-orders-count" element={
                        <UniversalView
                            viewName="Distinct Orders Count"
                            columns={[
                                {Header: 'Distinct Orders Count', accessor: 'distinctOrdersCount'}
                            ]}
                            fetchData={countDistinctOrders}
                        />
                    }/>

                    {/*14*/}
                    <Route path="/views/sales-with-total-price-greater-than" element={
                        <UniversalView
                            viewName="Sales with Total Price Greater Than"
                            columns={[
                                {Header: 'Sale ID', accessor: 'id'},
                                {Header: 'Date Sale', accessor: 'dateSale'},
                                {Header: 'date order', accessor: 'order.dateOrder'},
                                {Header: 'employee', accessor: 'order.employee.fullName'},
                                {Header: 'client', accessor: 'order.client.fullName'},
                                {Header: 'sale price', accessor: 'salePrice'},
                            ]}
                            inputParams={[
                                {name: 'totalPrice', label: 'Total Price', type: 'number'}
                            ]}
                            fetchData={getSalesWithTotalPriceGreaterThan}
                        />
                    }/>

                    {/*15*/}
                    <Route path="/views/orders-with-car-details" element={
                        <UniversalView
                            viewName="Orders with Car Details"
                            columns={[
                                {Header: 'Order ID', accessor: 'id'},
                                {Header: 'Brand', accessor: 'car.brand'},
                                {Header: 'Model', accessor: 'car.model'},
                                {Header: 'Date of Issue', accessor: 'car.dateOfIssue'},
                                {Header: 'Price', accessor: 'car.price'},
                                {Header: 'Additional Info', accessor: 'car.additionalInfo'}
                            ]}
                            fetchData={getOrdersWithCarDetails}
                        />
                    }/>

                    {/*16*/}
                    <Route path="/views/employees-with-position" element={
                        <UniversalView
                            viewName="Employees with Position"
                            columns={[
                                {Header: 'Employee ID', accessor: 'id'},
                                {Header: 'Full Name', accessor: 'fullName'},
                                {Header: 'Date of Birth', accessor: 'dateOfBirth'},
                                {Header: 'Phone', accessor: 'phone'},
                                {Header: 'Position', accessor: 'position.name'}
                            ]}
                            fetchData={getEmployeesWithPosition}
                        />
                    }/>

                    {/*17*/}
                    <Route path="/views/positions-with-employees" element={
                        <UniversalView
                            viewName="Positions with Employees"
                            columns={[
                                {Header: 'Position ID', accessor: 'id'},
                                {Header: 'Name', accessor: 'name'},
                                {Header: 'Salary', accessor: 'salary'},
                                {Header: 'Responsibilities', accessor: 'responsibilities'}
                            ]}
                            fetchData={getPositionsWitheEmployees}
                        />
                    }/>

                    {/*18*/}
                    <Route path="/views/orders-with-car-details-by-brand" element={
                        <UniversalView
                            viewName="Orders with Car Details by Brand"
                            columns={[
                                {Header: 'Order ID', accessor: 'id'},
                                {Header: 'Brand', accessor: 'car.brand'},
                                {Header: 'Model', accessor: 'car.model'},
                                {Header: 'Date of Issue', accessor: 'car.dateOfIssue'},
                                {Header: 'Price', accessor: 'car.price'}
                            ]}
                            inputParams={[
                                {name: 'brand', label: 'Brand', type: 'text'}
                            ]}
                            fetchData={getOrdersWithCarDetailsByBrand}
                        />
                    }/>
                    {/*19*/}
                    <Route path="/views/orders-with-car-details-by-model" element={
                        <UniversalView
                            viewName="Orders with Car Details by Model"
                            columns={[
                                {Header: 'Order ID', accessor: 'id'},
                                {Header: 'Brand', accessor: 'car.brand'},
                                {Header: 'Model', accessor: 'car.model'},
                                {Header: 'Date of Issue', accessor: 'car.dateOfIssue'},
                                {Header: 'Price', accessor: 'car.price'}
                            ]}
                            inputParams={[
                                {name: 'keyword', label: 'model', type: 'text'}
                            ]}
                            fetchData={getOrdersWithCarDetailsByModelContaining}
                        />
                    }/>
                    {/*20*/}
                    <Route path="/views/sales-with-total-sale-price" element={
                        <UniversalView
                            viewName="Sales with Total Sale Price"
                            columns={[
                                {Header: 'Sale ID', accessor: 'id'},
                                {Header: 'Date of Sale', accessor: 'dateOfSale'},
                                {Header: 'Total Sale Price', accessor: 'totalSalePrice'}
                            ]}
                            fetchData={getSalesWithTotalSalePrice}
                        />
                    }/>
                    {/*21*/}
                    <Route path="/views/sales-by-total-sale-price-greater-than" element={
                        <UniversalView
                            viewName="Sales by Total Sale Price Greater Than"
                            columns={[
                                {Header: 'Sale ID', accessor: 'id'},
                                {Header: 'Date of Sale', accessor: 'dateOfSale'},
                                {Header: 'Total Sale Price', accessor: 'totalSalePrice'}
                            ]}
                            fetchData={getSalesByTotalSalePriceGreaterThan}
                        />
                    }/>


                    {/* 22 */}
                    <Route path="/views/cars-with-price-greater-than-average" element={
                        <UniversalView
                            viewName="Cars with Price Greater Than Average"
                            columns={[
                                {Header: 'Car ID', accessor: 'id'},
                                {Header: 'Brand', accessor: 'brand'},
                                {Header: 'Model', accessor: 'model'},
                                {Header: 'Date of Issue', accessor: 'dateOfIssue'},
                                {Header: 'Price', accessor: 'price'}
                            ]}
                            fetchData={getCarsWithPriceGreaterThanAverage}
                        />
                    }/>

                    {/* 23 */}
                    <Route path="/views/sales-with-total-sale-price-greater-than-average" element={
                        <UniversalView
                            viewName="Sales with Total Sale Price Greater Than Average"
                            columns={[
                                {Header: 'Sale ID', accessor: 'id'},
                                {Header: 'Date Sale', accessor: 'dateSale'},
                                {Header: 'Sale Price', accessor: 'salePrice'}
                            ]}
                            fetchData={getSalesWithTotalSalePriceGreaterThanAverage}
                        />
                    }/>

                    {/* 24 */}
                    <Route path="/views/orders-with-sales" element={
                        <UniversalView
                            viewName="Orders with Sales"
                            columns={[
                                {Header: 'Order ID', accessor: 'id'},
                                {Header: 'Date Order', accessor: 'dateOrder'},
                                {Header: 'Order Status', accessor: 'orderStatus'}
                            ]}
                            fetchData={getOrdersWithSales}
                        />
                    }/>

                    {/* 25 */}
                    <Route path="/views/cars-with-price-greater-than-any-sale-price" element={
                        <UniversalView
                            viewName="Cars with Price Greater Than Any Sale Price"
                            columns={[
                                {Header: 'Car ID', accessor: 'id'},
                                {Header: 'Brand', accessor: 'brand'},
                                {Header: 'Model', accessor: 'model'},
                                {Header: 'Date of Issue', accessor: 'dateOfIssue'},
                                {Header: 'Price', accessor: 'price'}
                            ]}
                            fetchData={getCarsWithPriceGreaterThanAnySalePrice}
                        />
                    }/>

                    {/* 26 */}
                    <Route path="/views/cars-with-sale" element={
                        <UniversalView
                            viewName="Cars with Sale"
                            columns={[
                                {Header: 'Car ID', accessor: 'id'},
                                {Header: 'Brand', accessor: 'brand'},
                                {Header: 'Model', accessor: 'model'},
                                {Header: 'Date of Issue', accessor: 'dateOfIssue'},
                                {Header: 'Price', accessor: 'price'}
                            ]}
                            fetchData={getCarsWithSale}
                        />
                    }/>

                    {/* 27 */}
                    <Route path="/views/sales-with-employee-and-car" element={
                        <UniversalView
                            viewName="Sales with Employee and Car"
                            columns={[
                                {Header: 'Sale ID', accessor: 'id'},
                                {Header: 'Date Sale', accessor: 'dateSale'},
                                {Header: 'Sale Price', accessor: 'salePrice'}
                            ]}
                            fetchData={getSalesWithEmployeeAndCar}
                        />
                    }/>

                    {/*view*/}

                    <Route path="/cars" element={
                        <UniversalList
                            tableName="Cars"
                            columns={['id', 'brand', 'model', 'dateOfIssue', 'price', 'categoryId', 'additionalInfo']}
                            service={{
                                getAll: getCars,
                                create: createCars,
                                update: updateCars,
                                delete: deleteCars
                            }}
                        />
                    }
                    />

                    <Route path="/cars-category" element={
                        <UniversalList
                            tableName="cars-category"
                            columns={['id', 'categoryName', 'categoryDescription']}
                            service={{
                                getAll: getCarsCategory,
                                create: createCarsCategory,
                                update: updateCarsCategory,
                                delete: deleteCarsCategory
                            }}
                        />
                    }
                    />

                    <Route path="/clients" element={
                        <UniversalList
                            tableName="Clients"
                            columns={['id', 'fullName', 'address', 'phone', 'email']}
                            service={{
                                getAll: getClients,
                                create: createClient,
                                update: updateClient,
                                delete: deleteClient
                            }}
                        />
                    }
                    />

                    <Route path="/employee" element={
                        <UniversalList
                            tableName="Employee"
                            columns={['id', 'fullName', 'dateOfBirth', 'phone', 'positionID']}
                            service={{
                                getAll: getEmployee,
                                create: createEmployee,
                                update: updateEmployee,
                                delete: deleteEmployee
                            }}
                        />
                    }
                    />
                    <Route path="/positions" element={
                        <UniversalList
                            tableName="Positions"
                            columns={['id', 'name', 'salary', 'responsibilities']}
                            service={{
                                getAll: getPositions,
                                create: createPosition,
                                update: updatePosition,
                                delete: deletePosition
                            }}
                        />
                    }
                    />
                    <Route path="/orders" element={
                        <UniversalList
                            tableName="Orders"
                            columns={['id', 'carId', 'clientId', 'employeeId', 'dateOrder', 'orderStatus']}
                            service={{
                                getAll: getOrders,
                                create: createOrder,
                                update: updateOrder,
                                delete: deleteOrder
                            }}
                        />
                    }
                    />
                    <Route path="/sale" element={
                        <UniversalList
                            tableName="Sale"
                            columns={['id', 'orderId', 'dateSale', 'salePrice']}
                            service={{
                                getAll: getSales,
                                create: createSale,
                                update: updateSale,
                                delete: deleteSale
                            }}
                        />
                    }
                    />

                </Switch>
            </div>
        </Router>
    );
}

export default App;
