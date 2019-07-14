import React from 'react';
import ReactDOM from 'react-dom';


const App = props =>{
    return (
        <dive>
            <NumberOfStudents />
        </dive>
    )
}


class NumberOfStudents extends React.Component {
   constructor(props){
       super(props);
       this.state = {
       enrolledStudents :86 ,
       addStudents :0,
       waitlistedStudents : 8,
       addWaitList:0,
       
   };
}
    incrementStudent(event){
        this.setState({enrolledStudents : this.state.enrolledStudents + parseInt(this.state.addStudents)});
    }
    incrementWait(event2){
        this.setState({waitlistedStudents : this.state.waitlistedStudents + parseInt(this.state.addWaitList)});
    }

    incrementStudentByOne(){
        this.setState({enrolledStudents : this.state.enrolledStudents +1});
    }
    incrementWaitByOne(){
        this.setState({waitlistedStudents : this.state.waitlistedStudents +1});
    }

   render() {
    return (
        <div>
            <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
            <button onClick ={this.incrementStudentByOne.bind(this)}> Add 1 Enrolled Student</button> <br />
            <h4>Add Multiple Enrolled Students Students</h4>
            <input type= "number" onChange = {event => this.setState({addStudents: event.target.value})}
            value = {this.state.addStudents} />
            <button onClick ={this.incrementStudent.bind(this)}>Increase Students</button> 

            <br />
            <h1>Waitlisted Students: {this.state.waitlistedStudents}</h1> 
            <button onClick ={this.incrementWaitByOne.bind(this)}> Add 1 Waitlisted Student</button> <br />
            <h4>Add Multiple Waitlisted Students</h4>
            <input type= "number" onChange = {event2 => this.setState({addWaitList: event2.target.value})}
            value = {this.state.addWaitList} />
            <button onClick ={this.incrementWait.bind(this)}>Increase Students</button> 
        </div>
    );
}
}



ReactDOM.render(<App />, document.getElementById('root') );