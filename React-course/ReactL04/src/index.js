import React from 'react';
import ReactDOM from 'react-dom';





class Bank extends React.Component {
   constructor(props){
       super(props);
       this.state = {
       accountBalance : 9999.00,
       addMoney : 0
       
   };
}
    increment(){
        this.setState({accountBalance : this.state.accountBalance + parseInt(this.state.addMoney)});
    }

   render() {
    return (
        <div>
            <h3>Your Balance is now :${this.state.accountBalance}</h3> 
            <input type= "number" onChange = {event => this.setState({addMoney : event.target.value})}
            value = {this.state.addMoney} />
            <button onClick ={this.increment.bind(this)}>Logout</button> 
        </div>
    );
}
}



ReactDOM.render(<Bank />, document.getElementById('root') );