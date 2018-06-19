import React from 'react';
import logo from '../logo.svg';
import { Row, Col } from 'react-bootstrap';

export default class ModalLeftSide extends React.Component {
    //We will get the data for the image src and badges
    render() {
        return(
            <div>
                <Row className="modal-partner-image">
                            <Col xs={12} md={12} lg={12}><img src={logo} alt="logo" /></Col> 
                </Row>
                <Row className="modal-partner-image">
                    <Col xs={12} md={12} lg={12}>Badges</Col> 
                </Row>  
            </div>
        );
    }
}