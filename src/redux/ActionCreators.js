import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const addVehicle = (vehicle) => ({
  type: ActionTypes.ADD_VEHICLE,
  payload: vehicle
});

export const postVehicles = (vehiclename, owner, location, telnum, description)=> (dispatch) => {

  const newVehicle = {
      vehiclename: vehiclename,
      owner: owner,
      location: location,
      telnum: telnum,
      description: description
  };
  return fetch(baseUrl + 'vehicles', { 
      method: "POST",
      body: JSON.stringify(newVehicle),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addVehicle(response)))
  .catch(error =>  { console.log(error.message);
     alert('Your vehicle could not be added\nError: '+error.message); });
};

export const addVehicles = (vehicles) => ({
  type: ActionTypes.ADD_VEHICLES,
  payload: vehicles
});

export const fetchVehicles = () => (dispatch) => {
  dispatch(vehiclesLoading(true));
  
  return fetch(baseUrl + 'vehicles')
      .then(response => {
          if (response.ok) {
          return response;
          } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
          }
      },
      error => {
              var errmess = new Error(error.message);
              throw errmess;
      })
      .then(response => response.json())
      .then(vehicles => dispatch(addVehicles(vehicles)))
      .catch(error => dispatch(vehiclesFailed(error.message)));

}
export const vehiclesLoading = () => ({
  type: ActionTypes.VEHICLES_LOADING
});

export const vehiclesFailed = (errmess) => ({
  type: ActionTypes.VEHICLES_FAILED,
  payload: errmess
});



