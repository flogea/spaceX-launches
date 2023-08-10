import { useDispatch } from 'react-redux';
import SuccessLaunchesSlice, { setLaunches, getLaunchesLatest } from './SuccessLaunchesSlice';

describe('SuccessLaunchesSlice', () => {
  test('should set launches correctly', () => {
    const initialState = {
      launches: [],
    };
    const payload = [{ name: 'Launch 1' }, { name: 'Launch 2' }];
    const action = { type: 'launches/setLaunches', payload };
    const nextState = SuccessLaunchesSlice(initialState, action);
    expect(nextState.launches).toEqual([{ name: 'Launch 2' }, { name: 'Launch 1' }]);
  });

  test('should get latest launches correctly', () => {
    const initialState = {
      launches: [{ name: 'Launch 1' }, { name: 'Launch 2' }],
    };
    const action = { type: 'launches/getLaunchesLatest' };
    const nextState = SuccessLaunchesSlice(initialState, action);
    expect(nextState.launches).toEqual([{ name: 'Launch 2' }, { name: 'Launch 1' }]);
  });
});
