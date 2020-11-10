import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CustomButton = (props) => {
    return(
        <div>
            <Button className="btn btn-primary btn-block"
            onClick={props.handleAdd}>{props.caption}</Button>
        </div>
    )
}

export default CustomButton