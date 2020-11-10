import React from 'react';
import './Textarea.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'


const Textarea = (props) => {
    return (
        <div>
                <Form.Group controlId={props.controlId}>   
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control as={props.type} rows={3} placeholder={props.placeholder}
                    value={props.value} onChange={props.handleChange}/>
                </Form.Group>
        </div>
    )
}

export default Textarea;
