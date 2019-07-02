import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Vehicles } from './Vehicles'

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createForms } from 'react-redux-form';
import { InitialVehicle } from './forms';

export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({
          vehicles: Vehicles,
          ...createForms({
              vehicle: InitialVehicle 
          })
      }),
      applyMiddleware(thunk, logger)
  );


  return store;
}