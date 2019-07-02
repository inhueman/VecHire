import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const addVec = (vehicle) => ({
  type: ActionTypes.ADD_VEC,
  payload: vehicle
});

export const postVec = (vehiclename, owner, location, telnum, description)=> (dispatch) => {

  const newVec = {
      vehiclename: vehiclename,
      owner: owner,
      location: location,
      telnum: telnum,
      description: description
  };
  return fetch(baseUrl + 'vehicles', { 
      method: "POST",
      body: JSON.stringify(newVec),
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
  .then(response => dispatch(addVec(response)))
  .catch(error =>  { console.log(error.message);
     alert('Your vehicle could not be added\nError: '+error.message); });
};

