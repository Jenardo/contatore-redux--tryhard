import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const LBL = styled.div`
  width: fit-content;
  padding: 20px 25px;
  border: 2px solid red;
  margin: 1em auto;
`;

const Label = (props) => {
  return <LBL>{props.value}</LBL>;
};

export default connect((state) => ({ value: state.value }))(Label);
