import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label,  Col, Row} from 'reactstrap'
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



 class Add extends Component {
  constructor(props){
    super(props);
    
   
  }
  handleSubmit(values){
    console.log(values);
    this.props.postVehicles(values.vehiclename, values.owner, values.location,values.telnum, values.description);
    this.props.resetVecForm();
  }

  render() {
    return (
      <div className="container m-2">
        <div className="row">
          <div className="col-sm-12">
          <LocalForm model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="vehiclename" md={2}>Vehicle Name</Label>
                  <Col md={10}>
                      <Control.text model=".vehiclename" id="vehiclename" name="vehiclename"
                          placeholder="Vehicle Name"
                          className="form-control"
                          validators={{
                              required, minLength: minLength(3), maxLength: maxLength(15)
                          }}
                            />
                      <Errors
                          className="text-danger"
                          model=".vehiclename"
                          show="touched"
                          messages={{
                              required: 'Required',
                              minLength: 'Must be greater than 2 characters',
                              maxLength: 'Must be 15 characters or less'
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="owner" md={2}>Your Name</Label>
                  <Col md={10}>
                      <Control.text model=".owner" id="owner" name="owner"
                          placeholder="Your Name"
                          className="form-control"
                          validators={{
                              required, minLength: minLength(3), maxLength: maxLength(15)
                          }}
                            />
                      <Errors
                          className="text-danger"
                          model=".owner"
                          show="touched"
                          messages={{
                              required: 'Required',
                              minLength: 'Must be greater than 2 characters',
                              maxLength: 'Must be 15 characters or less'
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="location" md={2}>Location</Label>
                  <Col md={10}>
                      <Control.text model=".location" id="location" name="location"
                          placeholder="Location"
                          className="form-control"
                          validators={{
                              required, minLength: minLength(3), maxLength: maxLength(15)
                          }}
                            />
                      <Errors
                          className="text-danger"
                          model=".location"
                          show="touched"
                          messages={{
                              required: 'Required',
                              minLength: 'Must be greater than 2 characters',
                              maxLength: 'Must be 15 characters or less'
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                  <Col md={10}>
                      <Control.text model=".telnum" id="telnum" name="telnum"
                          placeholder="Tel. Number"
                          className="form-control"
                          validators={{
                              required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                          }}
                            />
                      <Errors
                          className="text-danger"
                          model=".telnum"
                          show="touched"
                          messages={{
                              required: 'Required',
                              minLength: 'Must be greater than 2 numbers',
                              maxLength: 'Must be 15 numbers or less',
                              isNumber: 'Must be a number'
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="description" md={2}>Description</Label>
                  <Col md={10}>
                      <Control.textarea model=".description" id="description" name="description"
                          rows="6"
                          className="form-control" />
                  </Col>

              </Row>
              <Row className="form-group">
                  <Col md={{size:10, offset: 2}}>
                      <Button type="submit" color="primary">
                      Add
                      </Button>
                  </Col>
              </Row>
          </LocalForm>
          </div>
        </div>
          
        

        </div>
      
    );
  }
}

export default Add;
