import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Input = (props) => {
  const [value, setValue] = useState(props.value);

  //use effect to change value
  useEffect(() => {
    props.changeValue(value);
  }, [value]);

  // Use effect quando il props viene modificato nello store dal button
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <input
      type="number"
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
    />
  );
};

export default connect(
  (state) => ({
    value: state?.value,
  }),
  (dispatch) => ({
    changeValue: (value) =>
      dispatch({
        type: 'changeValue',
        value: value,
      }),
  })
)(Input);
