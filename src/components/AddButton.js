import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class AddButton extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={10}></Col>
                    <Col xs={2}>
                        <Button bsStyle="danger" bsSize="large" onClick={this.props.onClick}>
                            <FontAwesome name="plus"></FontAwesome>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AddButton;