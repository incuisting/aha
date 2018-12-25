import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import counterActions from '../actions/counter';

const Counter = (props) => {
  const { increment, decrement, incrementAsync, counter } = props;
  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={incrementAsync}>
        delay + 1
      </button>
    </div>
  );
};
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
const mapStateToProps = (state) => state;
export default connect(
  mapStateToProps,
  counterActions
)(Counter);
