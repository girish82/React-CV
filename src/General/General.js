import React, { Component } from 'react';
import Input from '../Input/Input';
import './General.css';
import CustomButton from '../CustomButton/CustomButton'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import * as GeneralAction from '../Store/Actions/GeneralAction'
import { NavLink } from 'react-router-dom'

class  General extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    state = {
        name : this.props.genState.name,
        email : this.props.genState.email,
        phone : this.props.genState.phone
    }

    handleNameChange = (e) => {
        this.setState({
            name : e.target.value
        })
        // console.log( 'Name',this.state)
    }
    handleEmailChange = (e) => {
        this.setState({
            email : e.target.value
        })
        // console.log(this.state)
    }
    handlePhoneChange = (e) => {
        this.setState({
            phone : e.target.value
        })
        // console.log(this.state)
    }
    
    render() {
        console.log(this.props.genState)
        return (
        <div className="general row">
            <div className="col-md-6 m-auto">
            <Form className="genForm">
            <Input 
            value={this.state.name} label="Name" type="text" 
            placeholder="Enter User Name" controlId="UserName"
            handleChange = {this.handleNameChange}
            ></Input>
             <Input 
            value={this.state.email} label="Email" type="email" 
            placeholder="Enter Email Id" controlId="Email"
            handleChange = {this.handleEmailChange}
            ></Input>
             <Input 
            value={this.state.phone} label="Phone Number" type="number" 
            placeholder="Enter Phone Number" controlId="PhoneNumber"
            handleChange = {this.handlePhoneChange}
            ></Input>
            {/* <CustomButton caption="Next >>"
            handleAdd = {()=>this.props.addGeneral(this.state.name,this.state.email,this.state.phone)}>
            </CustomButton> */}
            <NavLink className="navButton" to="/Education"
            onClick = {()=>this.props.addGeneral(this.state.name,this.state.email,this.state.phone)}>
            Next>>
            </NavLink>
            </Form>
            </div>
        </div>
    )

    }
}

const mapStateToProps = (state) => {
    return {
        genState : state.genReducer
    }
}

const mapActionToProps = (dispatch) => {
    return {
        addGeneral : (name,email,phone) => {
            // this.props.history.push({pathname:'/Education'})
            dispatch(GeneralAction.addGeneral
            ({payload :{name,email,phone}}))
        }
    }
}

export default connect(mapStateToProps,mapActionToProps)(General);