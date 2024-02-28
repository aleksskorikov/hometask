
import React from 'react';
import { connect } from 'react-redux';
import '../../styles/scss/_tasck4.scss';

const ComponentB = ({ count, increment }) => {
  return (
    <div className="component__b">
      <h2 className="component__b-title">Component B</h2>
      <p className="component__b-count">Count: {count}</p>
      <button onClick={increment} className="component__b-btn">Clic</button>
    </div>
  );
};

const StateCount = (state) => ({
  count: state.count,
});

const IncrementCount = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
});

export default connect(StateCount, IncrementCount)(ComponentB);
