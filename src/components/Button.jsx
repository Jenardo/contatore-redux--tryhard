import React from 'react';
import { connect } from 'react-redux';
import { PLUS_ONE, MINUS_ONE } from '../redux/actions/actions';

const Button = (props) => {
  return (
    <button
      onClick={() => {
        props.isIncrement ? props.increment() : props.decrement();
      }}
    >
      {props.name}
    </button>
  );
};

export default connect(null, (dispatch) => ({
  increment: () => dispatch({ type: PLUS_ONE }),
  decrement: () => dispatch({ type: MINUS_ONE }),
}))(Button);
