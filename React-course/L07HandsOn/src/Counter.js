import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {
  increment = () => {
   
    this.props.dispatch({type : 'INCREMENT'});
  };
  incrementBy5 = () => {
   
    this.props.dispatch({type : 'INCREMENTBY5'});
  };

  decrement = () => {
  
    this.props.dispatch({type : 'DECREMENT'});
  };

  decrementBy10 = () => {
  
    this.props.dispatch({type : 'DECREMENTBY10'});
  };

 reset = () => {
  
    this.props.dispatch({type : 'RESET'});
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <br />
        <span>{this.props.count}</span>
        <div>
          
          <button onClick={this.increment}>Increase By 1</button><br/>
          <button onClick={this.incrementBy5}>Increase By 5</button><br/>
          <button onClick={this.decrement}>Decrease By 1</button><br/>
          <button onClick={this.decrementBy10}>Decrease By 10</button><br/>
          <button onClick = {this.reset}>Reset</button>

          <br />

        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    count: state.count
  };
}


export default connect(mapStateToProps)(Counter);
