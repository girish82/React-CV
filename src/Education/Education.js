import React, { Component } from 'react';
import './Education.css';
import Input from '../Input/Input';
// import CustomButton from '../CustomButton/CustomButton'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import * as EducationAction from '../Store/Actions/EducationAction'
import { NavLink } from 'react-router-dom'

class Education extends Component  {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props)
    }
    
    state = {
      school : this.props.eduState.school,
      degree : this.props.eduState.degree,
      from : this.props.eduState.from,
      to : this.props.eduState.to
    }

    handleSchool = (e) => {
      this.setState ({
        school : e.target.value
      })
    }

    handleDegree = (e) => {
      this.setState ({
        degree : e.target.value
      })
    }

    handleFrom = (e) => {
      this.setState ({
        from : e.target.value
      })
    }

    handleTo = (e) => {
      this.setState ({
        to : e.target.value
      })
    }


    render() {
      console.log(this.state)
      return (
        <div className="education row">
        <div className="col-md-6 m-auto">
        <Form className="genForm">
        <Input 
        value={this.state.school} label="SchoolName" type="text" 
        placeholder="Enter School Name" controlId="SchoolName"
        handleChange={this.handleSchool}
        ></Input>
         <Input 
        value={this.state.degree} label="Degree" type="text" 
        placeholder="Enter Degree Name" controlId="Degree"
        handleChange={this.handleDegree}
        ></Input>
         <Input 
        value={this.state.from} label="Study From" type="date" 
        placeholder="Study Start From" controlId="DegreeStart"
        handleChange={this.handleFrom}
        ></Input>
          <Input 
        value={this.state.to} label="Study To" type="date" 
        placeholder="Study Finished On" controlId="DegreeEnd"
        handleChange={this.handleTo}
        ></Input>
        {/* <CustomButton caption="Next >>"
        handleAdd = {()=> this.props.addEducation(this.state.school,this.state.degree,
        this.state.from,this.state.to)}></CustomButton> */}
        <NavLink className="navButton" to="/Experiance"
            onClick = {()=>this.props.addEducation(this.state.school,this.state.degree,
              this.state.from,this.state.to)}>
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
    eduState : state.eduReducer
  }
}

const mapActionToProps = (dispatch) => {
  return {
    addEducation : (school,degree,from,to) =>
     {dispatch(EducationAction.addEducation({payload:{school,degree,from,to}}))}
  }
}

export default connect(mapStateToProps,mapActionToProps)(Education);