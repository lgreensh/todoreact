import React, { Component } from 'react';
import { Row, Col, FormGroup, InputGroup, FormControl, Label, Button } from 'react-bootstrap';

class AddTaskText extends Component {
    state = {
        title: "",
        description: "",
    }
    render() {
        return (
            <Row>
                <Col xs={10}>
                    <form onSubmit={e => {
                        e.preventDefault();
                        return this.props.onSubmit(this.state);
                    }
                    }>
                        <FormGroup>
                            <InputGroup>
                                <Label>Title</Label>
                                <FormControl type="text" onChange={e => this.setState({ title: e.target.value })} />
                            </InputGroup>
                            <InputGroup>
                                <Label>Description</Label>
                                <FormControl type="text" onChange={e => this.setState({ description: e.target.value })} />
                            </InputGroup>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </form>

                </Col>
            </Row>
        );
    }
}

export default AddTaskText;