import React, { Component } from 'react';
import './Experiance.css';
import Input from '../Input/Input';
// import CustomButton from '../CustomButton/CustomButton';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Textarea from '../Textarea/Textarea';
import { connect } from 'react-redux';
import * as ExperianceAction from '../Store/Actions/ExperianceAction';
import { NavLink } from 'react-router-dom';

class Experiance extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  state = {
    company: this.props.expState.company,
    position: this.props.expState.position,
    from: this.props.expState.from,
    to: this.props.expState.to,
    tasks: this.props.expState.tasks,
  };

  handleCompany = (e) => {
    this.setState({
      company: e.target.value,
    });
  };

  handlePosition = (e) => {
    this.setState({
      position: e.target.value,
    });
  };

  handleFrom = (e) => {
    this.setState({
      from: e.target.value,
    });
  };

  handleTo = (e) => {
    this.setState({
      to: e.target.value,
    });
  };

  handleTask = (e) => {
    this.setState({
      tasks: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className='experiance row'>
        <div className='col-md-6 m-auto'>
          <Form className='genForm'>
            <Input
              value={this.state.company}
              label='Company'
              type='text'
              placeholder='Enter Company Name'
              controlId='Company'
              handleChange={this.handleCompany}
            ></Input>
            <Input
              value={this.state.position}
              label='Position'
              type='text'
              placeholder='Enter Position'
              controlId='Position'
              handleChange={this.handlePosition}
            ></Input>
            <Input
              value={this.state.from}
              label='Job From'
              type='date'
              placeholder='Job Start From'
              controlId='JobStart'
              handleChange={this.handleFrom}
            ></Input>
            <Input
              value={this.state.to}
              label='Job To'
              type='date'
              placeholder='Job Finished On'
              controlId='JobEnd'
              handleChange={this.handleTo}
            ></Input>
            <Textarea
              value={this.state.tasks}
              label='Job Tasks'
              type='textarea'
              placeholder='Job Tasks'
              controlId='JobTask'
              handleChange={this.handleTask}
            ></Textarea>
            {/* <CustomButton caption="Submit"
        handleAdd={() => this.props.addExperiance(this.state.company,this.state.position,
            this.state.from,this.state.to,this.state.tasks)}></CustomButton> */}
            <NavLink
              className='navButton'
              to='/Summary'
              onClick={() =>
                this.props.addExperiance(
                  this.state.company,
                  this.state.position,
                  this.state.from,
                  this.state.to,
                  this.state.tasks
                )
              }
            >
              Submit
            </NavLink>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expState: state.expReducer,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    addExperiance: (company, position, from, to, tasks) => {
      dispatch(
        ExperianceAction.addExperiance({
          payload: { company, position, from, to, tasks },
        })
      );
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(Experiance);
