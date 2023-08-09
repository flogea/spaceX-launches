import React, { useCallback, useMemo } from 'react';

import Arrow from '../../assets/ico/arrow.svg';
import { useDispatch } from 'react-redux';
import { getLaunchesLatest } from '../../redux/Slices/SuccessLaunchesSlice';

import './index.scss';

function Button() {
  const [isActive, setIsActive] = React.useState(false);
  const dispatch = useDispatch();

  const handleSortLaunches = () => {
    dispatch(getLaunchesLatest());
    setIsActive(!isActive);
  };

  return (
    <div>
      <button onClick={handleSortLaunches} className={`${isActive ? 'active' : ''}`}>
        <Arrow />
      </button>
    </div>
  );
}

export default Button;
