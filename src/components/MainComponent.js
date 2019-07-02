import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent'; 
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import AddComponent from './AddComponent'
import HireComponent from './HireComponent'
import { actions } from 'react-redux-form';
import { postVec } from '../redux/ActionCreators'
const mapStateToProps = state => {
  return {
    vehicles: state.vehicles
  }
}
const mapDispatchToProps = dispatch => ({
  
  postVec: (vehiclename, owner, location, telnum, description) => dispatch(postVec(vehiclename, owner, location, telnum, description)),
  resetVecForm: () => { dispatch(actions.reset('feedback'))},
});
class Main extends Component {
  constructor(props){

    super(props);

  }

  render() {
    return (
      <div>
        <Header />
            <Route path="/" exact component={Home} />
            <Route path="/hire" exact component={HireComponent} />
            <Route path="/vehicles" exact component={() => <AddComponent resetVecForm = {this.props.resetVecForm} postVec={this.props.postVec}/>}/>
             

        <Footer />
      </div>
    
     

);
  }
  
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
