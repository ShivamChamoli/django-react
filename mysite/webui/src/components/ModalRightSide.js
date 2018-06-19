import React from 'react';
import { Row, Col } from 'react-bootstrap';

//Will have code for data persistence
export default class ModalRightSide extends React.Component {
    render() {
        return(
            <div>
                <Row>
                    <Col xs={12} md={12} lg={12}><h1>{this.props.name}</h1></Col>
                </Row>
                <Row className="partner-info">
                            <Col xs={12} md={12} lg={12}>
                                <div>
                                    What is Lorem Ipsum?
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    What is Lorem Ipsum?
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    What is Lorem Ipsum?
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    What is Lorem Ipsum?
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </Col> 
                </Row>
                <Row className="add-info">
                    <Col xs={12} md={12} lg={12}>
                        <div className="form-group">
                            <label><h4>New Comments:</h4></label>
                            <textarea readOnly={this.props.state} className="form-control" rows="5" id="comment"></textarea>
                            <button disabled={this.props.state} type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </Col> 
                </Row>  
            </div>
        );
    }
}