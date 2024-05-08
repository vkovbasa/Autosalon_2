import React, { useState } from 'react';
import { useTable } from 'react-table';
import './universalList.css';

const UniversalView = ({ viewName, columns, fetchData, inputParams }) => {
  const [params, setParams] = useState({}); // Стейт для параметрів запиту
  const [data, setData] = useState([]); // Стейт для даних

  const handleChange = e => {
    // Обробник для зміни значень параметрів
    setParams({
      ...params,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    // Обробник для відправки запиту при натисканні кнопки
    e.preventDefault();
    try {
      const response = await fetchData(params); // Викликаємо метод fetchData зі збереженими параметрами
      console.log(response)
      setData(response); // Оновлюємо стейт з даними
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const table = useTable({
    columns,
    data: Array.isArray(data) ? data : [], // Перевіряємо, чи data є масивом
  });

  return (
      <div className="universal-list">
        <h2>{viewName}</h2>
        <form onSubmit={handleSubmit}>
          {inputParams?.map(param => ( // Динамічно створюємо поля введення на основі пропсів inputParams
              <div key={param.name} className="form-group">
                <label htmlFor={param.name}>{param.label}:</label>
                <input
                    type={param.type || 'text'} // Встановлюємо тип поля вводу, якщо не вказано, то 'text' за замовчуванням
                    name={param.name}
                    id={param.name}
                    value={params[param.name] || ''}
                    onChange={handleChange}
                />
              </div>
          ))}
          <button type="submit">Submit</button>
        </form>
        <table {...table.getTableProps()}>
          <thead>
          {table.headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
          ))}
          </thead>
          <tbody>
          {table.rows.map(row => {
            table.prepareRow(row);
            return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
            );
          })}
          </tbody>
        </table>
      </div>
  );
};

export default UniversalView;
