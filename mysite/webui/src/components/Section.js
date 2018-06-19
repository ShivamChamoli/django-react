import React from 'react';
import '../css/Section.css';
import { Row, Col } from 'react-bootstrap';
import Image from './Image.js';

export default class Content extends React.Component {
    populateSection() {
        let rows = [];
        let numberOfItems = parseInt(this.props.data.length,10); 
        for(let i=0; i<numberOfItems; i++) {
            //creates the image + popup for that image
            rows.push(<Image state = {this.props.state} data={this.props.data[i]} key={this.props.data[i].id}/>)
        }
        return rows;
    }
    render() {
        return (
          <div key ={this.props.id} className="partner-section">
              <Row className="partner-header">
                        <Col xs={1} md={1} lg={1}>{this.props.type}</Col>
                        <Col xs={1} md={1} lg={1}>({parseInt(this.props.data.length,10)})</Col> 
              </Row>
              <div className="partners">
                {this.populateSection()}
              </div>   
          </div>
        );
    }
}