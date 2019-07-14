import React from "react";
import ReactDOM from "react-dom";


const stateInfo = (stateOne,popStateOne,capStateOne,
    stateTwo,popStateTwo,capStateTwo,
    stateThree,popStateThree,capStateThree,
    stateFour,popStateFour,capStateFour)=> {
    return (
    <table >
  <tr>
    <th>State</th>
    <th>Population</th> 
    <th>Capital</th>
  </tr>
  <tr>
    <td>{stateOne}</td>
    <td>{popStateOne}</td> 
    <td>{capStateOne}</td>
  </tr>
  <tr>
    <td>{stateTwo}</td>
    <td>{popStateTwo}</td> 
    <td>{capStateTwo}</td>
  </tr>
  <tr>
    <td>{stateThree}</td>
    <td>{popStateThree}</td> 
    <td>{capStateThree}</td>
  </tr>
  <tr>
    <td>{stateFour}</td>
    <td>{popStateFour}</td> 
    <td>{capStateFour}</td>
  </tr>
</table>
    );
};

ReactDOM.render(stateInfo("Idaho"," ","Boise","Tennesse","6.651 million","Nashville","Maine","1.331 million","Agusta","Wisconsin","5.779 million","Madison")

    , document.getElementById('root')
);