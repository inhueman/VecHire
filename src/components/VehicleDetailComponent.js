import React, { Component } from 'react'
import {Card, CardImg} from 'reactstrap'

const VehicleDetail = (props) => {
   
    if (props.vehicle != null){
      return (
        <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
                <h3>{props.vehicle.vehiclename}</h3>
                <hr />
            </div>
           
          </div>
          <div className="row">
              <div className="col-12 col-md-5 m-1">
                <Card>
                  <CardImg top width="100%" src="http://www.bestscooty.in/wp-content/uploads/2016/11/Honda-Activa.jpg" alt="Card image cap" />
                </Card>
              </div>
              <div className="col-12 col-md-5 m-1">
                  <h2>{props.vehicle.vehiclename}</h2>
                  <h3>{props.vehicle.location}</h3>
                  <h3>{props.vehicle.owner}</h3>
                  <h3>{props.vehicle.description}</h3>
              </div>
          </div>
        </div>
        </div>
      )
     
      }
      else{
        return(
          <div>
            Not Found
          </div>
        )

    }
  }
    
  

export default VehicleDetail
