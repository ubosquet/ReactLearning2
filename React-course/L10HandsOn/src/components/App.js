import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, changeNumber, inputNumber } from '../actions/index';

class App extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.count !== nextProps.count) {
      return true;
    }
   
     else {
      return false;
    }
  }
  

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count}  buttonclicked={ this.props.buttonclicked }  onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}
        onChangeNumber= {this.props.onChangeNumber} onInputNumber={this.props.onInputNumber} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onChangeNumber : (number) => dispatch(changeNumber(number)),
    onInputNumber : () => dispatch(inputNumber())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numberInputted : state.numberInputted,
      buttonclicked : state.buttonclicked
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);