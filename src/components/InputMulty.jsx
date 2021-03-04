import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const InputM = (props) => {
  const [multy, setMulty] = useState(0);

  useEffect(() => {
    console.log(multy);
  });

  return (
    <input
      type="number"
      value={multy}
      onChange={(e) => {
        setMulty(e.target.value);
      }}
    />
  );
};

export default InputM;
