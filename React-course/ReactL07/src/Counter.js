import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {
  increment = () => {
    // fill in later
    this.props.dispatch({type : 'INCREMENT'});
  };

  decrement = () => {
    // fill in later
    this.props.dispatch({type : 'DECREMENT'});
  };

 reset = () => {
    // fill in later
    this.props.dispatch({type : 'RESET'});
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <br />
          <button onClick = {this.reset}>Reset</button>

        </div>
      </div>
    );
  }
}

// Add the below function:
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// Replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(Counter);
