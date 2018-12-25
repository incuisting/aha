import React from 'react';
import { connect } from 'react-redux';
import counterActions from '../actions/counter';

const Counter = (props) => {
  const {
    increment, decrement, incrementAsync, counter,
  } = props;
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={incrementAsync}>delay + 1</button>
    </div>
  );
};
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  counterActions,
)(Counter);
