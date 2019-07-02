import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent'; 
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import AddComponent from './AddComponent'
import HireComponent from './HireComponent'
import VehicleDetail from './VehicleDetailComponent'
import { actions } from 'react-redux-form';
import { postVehicles,fetchVehicles, vehiclesLoading, vehiclesFailed } from '../redux/ActionCreators'

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles
  }
}


const mapDispatchToProps = dispatch => ({
  
  postVehicles: (vehiclename, owner, location, telnum, description) => dispatch(postVehicles(vehiclename, owner, location, telnum, description)),
  resetVecForm: () => { dispatch(actions.reset('feedback'))},
  fetchVehicles: () => dispatch(fetchVehicles())
});
class Main extends Component {
  constructor(props){

    super(props);

  }
  componentDidMount(){
    this.props.fetchVehicles()
  }

 

  render() {
    const VehicleWithId = ({match}) => {
      return(
       <VehicleDetail vehicle={this.props.vehicles.vehicles.filter((vehicle) => vehicle.id === parseInt(match.params.vehicleId,10))[0]}
            isLoading={this.props.vehicles.isLoading}
            errMess={this.props.vehicles.errMess}
          />
  
      );
    }
    return (
      <div>
        <Header />
            <Route path="/" exact component={Home} />
            <Route exact path='/hire' component={() => <HireComponent vehicles={this.props.vehicles} />} />
            <Route path='/hire/:vehicleId' component={VehicleWithId} />
            <Route path="/vehicles" exact component={() => <AddComponent resetVecForm = {this.props.resetVecForm} postVehicles={this.props.postVehicles}/>}/>
             

        <Footer />
      </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
