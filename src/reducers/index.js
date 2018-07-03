import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather : weatherReducer //// QUESTION: no action toh kaise aya result?
});
export default rootReducer;
