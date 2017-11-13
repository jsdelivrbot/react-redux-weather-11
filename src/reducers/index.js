import { combineReducers } from 'redux';
import ReducerWeather from './reducer_weather'

const rootReducer = combineReducers({
  city: ReducerWeather
});

export default rootReducer;
