import React, { useEffect, useState } from 'react';
import './universalList.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UniversalList = ({ tableName, columns, service }) => {
  const itemsPerPage = 5; // кількість позицій на сторінці
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const response = await service.getAll();
      setData(response);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleCreate = async () => {
    const response = await service.create(newData);
    if (response.status === 400 || response.status === 204) {
      toast.error(response.message); // Виведення сповіщення про помилку
    } else {
      setNewData({});
      fetchInitialData();
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await service.update(id, newData);
      switch (response.status) {
        case 400 || 204: {
          toast.error(response.message); // Виведення сповіщення про помилку
          break;
        }
        default: {
          cancelEdit();
        }
      }
      fetchInitialData();
    } catch (error) {
      console.log('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await service.delete(id);
      fetchInitialData();
    } catch (error) {
      console.log('Error deleting data:', error);
    }
  };

  const handleEdit = (item) => {
    setEditMode(true);
    setEditItemId(item.id);
    setNewData({ ...item });
  };

  const cancelEdit = () => {
    setEditMode(false);
    setEditItemId(null);
    setNewData({});
  };

  const handleInputChange = (e, columnName) => {
    const value = e.target.value;
    setNewData((prevData) => ({
      ...prevData,
      [columnName]: value,
    }));
  };

  const handleDateChange = (date, columnName) => {
    setNewData((prevData) => ({
      ...prevData,
      [columnName]: date,
    }));
  };

  const handlePageChange = (selected) => {
    setCurrentPage(selected);
  };

  const paginatedData = data.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
  );

  return (
      <div className="universal-list">
        <h2>{tableName}</h2>
        <table>
          <thead>
          <tr>
            {columns.map((column, index) => (
                <th key={index}>{column}</th>
            ))}
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {paginatedData.map((item) => {
            return (
                <tr key={item.id}>
                  {columns.map((column, index) => {
                    return (
                        <td key={index}>
                          {editMode && editItemId === item.id && index > 0 ? (
                              column.indexOf('date') !== -1 ? (
                                  <DatePicker
                                      selected={newData[column] ? new Date(newData[column]) : null}
                                      onChange={(date) => handleDateChange(date, column)}
                                      dateFormat="yyyy-MM-dd"
                                      style={{width: '150px'}}
                                  />
                              ) : (
                                  <input
                                      type="text"
                                      value={newData[column] || ''}
                                      onChange={(e) => handleInputChange(e, column)}
                                      style={{width: '150px'}}
                                  />
                              )
                          ) : (
                              item[column]
                          )}
                        </td>

                    );
                  })}
                  <td>
                    {editMode && editItemId === item.id ? (
                        <>
                          <button onClick={() => handleUpdate(item.id)}>Save</button>
                          <button onClick={cancelEdit}>Cancel</button>
                        </>
                    ) : (
                        <>
                          <button onClick={() => handleEdit(item)}>Edit</button>
                          <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </>
                    )}
                  </td>
                </tr>
            );
          })}
          </tbody>
        </table>
        <div className="pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button
              disabled={currentPage === 0}
              onClick={() => handlePageChange(currentPage - 1)}
          >
            &larr;
          </button>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {Array.from(Array(Math.ceil(data.length / itemsPerPage)).keys()).map((page) => (
                <a
                    key={page}
                    onClick={() => handlePageChange(page)}
                    style={{
                      marginRight: '5px',
                      fontWeight: currentPage === page ? 'bold' : 'normal',
                      cursor: 'pointer',
                    }}
                >
                  {page + 1}
                </a>
            ))}
          </div>
          <button
              disabled={(currentPage + 1) * itemsPerPage >= data.length}
              onClick={() => handlePageChange(currentPage + 1)}
          >
            &rarr;
          </button>
        </div>

        {!editMode && (
            <div className="add-item" style={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
              <h3>Add {tableName.slice(0, -1)}</h3>
              {columns.slice(1).map((column, index) => {
                return (
                    <div key={index}>
                      {
                        column.indexOf('date') !== -1 ? (
                            <DatePicker
                                selected={newData[column] || null}
                                onChange={(date) => handleDateChange(date, column)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText={column} // Задаем текст по умолчанию
                                className="date-picker" // Добавляем класс для DatePicker
                            />
                        ) : (
                            <input
                                type="text"
                                value={newData[column] || ''}
                                onChange={(e) => handleInputChange(e, column)}
                                style={{ width: '500px' }} // Задаємо фіксовану ширину input
                                placeholder={column}
                            />
                        )}
                    </div>
                );
              })}
              <button onClick={handleCreate}>Add</button>
            </div>
        )}
        <ToastContainer position="bottom-right" />
      </div>
  );
};

export default UniversalList;
