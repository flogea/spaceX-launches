import React from 'react';
import { useGetImageQuery, useGetLaunchesQuery, useGetRocketsQuery } from './redux';
import { useDispatch } from 'react-redux';
import { setLaunches } from './redux/Slices/SuccessLaunchesSlice';
import { Table } from './widgets';

import './style.scss';

// 01.01.2020 00:00:00 --- 1577826000
// 01.01.2015 00:00:00 -- 1420059600

function App() {
  const { data } = useGetLaunchesQuery();
  const rockets = useGetRocketsQuery()?.data;
  const dispatch = useDispatch();

  const START_DATE = 1420059600;
  const END_DATE = 1577826000;

  if (data) {
    let successLaunches = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].success && data[i].date_unix > START_DATE && data[i].date_unix < END_DATE) {
        let clone = {};
        for (let key in data[i]) {
          clone[key] = data[i][key];
        }

        const idOfRocket = data[i].rocket;
        let imageOfRocket = '';

        rockets &&
          rockets.map((rocket, index) => {
            if (rocket.id === idOfRocket) {
              imageOfRocket = rocket.flickr_images[0];
              clone.imageOfRocket = imageOfRocket;
            }
          });

        successLaunches.push(clone);
      }
    }
    console.log(successLaunches);
    dispatch(setLaunches(successLaunches));
  }

  return (
    <div className="container">
      <Table />
    </div>
  );
}

export default App;
