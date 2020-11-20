import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../App.css';

class Navi extends Component{
    render() {
        return(
            <Navbar style={{borderRadius:"10px"}} collapseOnSelect expand="false" bg="dark" variant="dark">
                <Navbar.Toggle/>
                <Navbar.Collapse className="square">
                    <Nav className="mr-auto">
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navi;