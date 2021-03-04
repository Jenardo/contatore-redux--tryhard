import React from 'react';
import { connect } from 'react-redux';

const btnMulti = (props) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        console.log(props);
        props.Multiply();
      }}
    >
      {props.name}
    </button>
  );
};
// export default btnMulti;

export default connect(null, (dispatch) => ({
  Multiply: () => dispatch({ type: 'multyVal', multy: 9 }),
}))(btnMulti);
