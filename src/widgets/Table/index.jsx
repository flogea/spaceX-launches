import React from 'react';
import { useSelector } from 'react-redux';

import './index.scss';
import { Button } from '../../UiKit';

function Table() {
  const launches = useSelector((state) => state.SuccessLaunchesSlice.launches);

  return (
    <div>
      <div className="sort">
        Отсортировать по дате: <Button />
      </div>
      <table>
        <tr>
          <th>Название</th>
          <th>Дата полёта</th>
          <th>Детали</th>
          <th>Фотография</th>
        </tr>
        {launches.map((launch, index) => (
          <tr key={`${launch.name}_${index}`}>
            <td>{launch.name}</td>
            <td>{launch.date_local}</td>
            <td>{launch.details}</td>
            <td>
              <img src={launch.imageOfRocket} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
