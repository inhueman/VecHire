import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, 
    Modal, Button, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label} from 'reactstrap'; 
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
            // isModalOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    // toggleModal(){
    //     this.setState({
    //         isModalOpen: !this.state.isModalOpen
    //     });
    // }
    // handleLogin(event){
    //     this.toggleModal();
    //     alert("Username: " + this.username.value + "Password: " + this.password.value
    //     + " Remember: " + this.remember.checked);
    //     event.preventDefault();


    // }
    render() {
        return(
            <React.Fragment>
                <Navbar dark color="secondary" expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                       <img src="assets/images/logo.png" height="30" width="41" alt="VecHire" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                         <Nav navbar>

                             <NavItem>
                                 <NavLink className="nav-link" to="/">
                                     <span className="fa fa-home fa-lg"></span> Home
                                 </NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink className="nav-link" to="/">
                                     <span className="fa fa-info fa-lg"></span> Hire
                                 </NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink className="nav-link" to="/vehicles">
                                     <span className="fa fa-plus fa-lg"></span> Add
                                 </NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink className="nav-link" to="/">
                                     <span className="fa fa-address-card fa-lg"></span> Contact Us
                                 </NavLink>
                             </NavItem>
                             
                         </Nav>
                         <Nav className='ml-auto' navbar>
                             <NavItem>
                                 <NavLink className="nav-link" to="/signup">
                                    <Button color="primary">
                                        <span className="fa fa-user-plus fa-lg"></span> SignUp
                                    </Button>
                                 </NavLink>
                                 
                             </NavItem>
                                 <NavLink className="nav-link" to="/signin">
                                    <Button color="primary">
                                        <span className="fa fa-sign-in fa-lg"></span> SignIn
                                    </Button>
                                 </NavLink>
                         </Nav>
                    </Collapse>
                </div>
                </Navbar>
                
                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                  innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" 
                                  innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                        innerRef={(input) => this.remember = input} />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="rimary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal> */}
            </React.Fragment>
        );
    }
}

export default Header;