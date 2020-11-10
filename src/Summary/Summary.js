import React from 'react';
import { connect } from 'react-redux';
import CardList from '../CardList/CardList';
import './Summary.css';

const Summary = (props) => {
  console.log(props.genState);
  // console.log(props.eduState)
  // console.log(props.expState)
  // eslint-disable-next-line no-lone-blocks
  // {
  //     for(var info in props.genState) {
  //         console.log(info,props.genState[info])
  //     }
  // }
  return (
    <div className="summary row">
      <div className="col-md-4">
      <CardList
        className='cardList'
        header='General Details'
        goto="General"
        details={props.genState}
      ></CardList>
      </div>
      <div className="col-md-4">
      <CardList
        className='cardList'
        header='Education Details'
        goto="Education"
        details={props.eduState}
      ></CardList>
      </div>
      <div className="col-md-4">
      <CardList
        className='cardList'
        header='Experiance Details'
        goto="Experiance"
        details={props.expState}
      ></CardList>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    genState: state.genReducer,
    eduState: state.eduReducer,
    expState: state.expReducer,
  };
};

export default connect(mapStateToProps)(Summary);
