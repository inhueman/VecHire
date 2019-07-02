import * as ActionTypes from './ActionTypes';

export const Vehicles = (state = { errMess: null, vehicles: []}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_VEC:
        var vehicle = action.payload;
        return { ...state, vehicles: state.vehicles.concat(vehicle)};
    default:
      return state;
  }
};