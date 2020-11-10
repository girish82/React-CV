import React from 'react';
import './Input.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'


const Input = (props) => {
    function convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        console.log(inputFormat,d)
        console.log([d.getFullYear(), pad(d.getMonth()+1),pad(d.getDate())].join('-'))
        return [d.getFullYear(), pad(d.getMonth()+1),pad(d.getDate())].join('-')
      }
    return (
        <div>
                <Form.Group controlId={props.controlId}>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control size="sm" type={props.type} placeholder={props.placeholder} 
                    onChange={props.handleChange}
                    // value = "2020-10-20"
                     value = {props.type === "text" || "email" ? props.value : convertDate(props.value)}
                    />
                </Form.Group>
        </div>
    )
}

export default Input;