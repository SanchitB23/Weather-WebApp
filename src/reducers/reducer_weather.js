import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) { //// QUESTION: action and state are keywords?
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); //below Return state is almost same as this one
      return [action.payload.data, ...state]; //// NOTE: ... tells that the variable can be an array  ES6 thingy  
  }
  return state;
}
