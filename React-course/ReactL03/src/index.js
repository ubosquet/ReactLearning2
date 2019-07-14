import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const App = props => {

    const items = [
        {name : "Bread", price: 2.50},
        {name : "Milk", price: 1.50},
        {name : "Egg", price: 3.50},
        {name : "Juice", price: 5.50},
    ];
    return (
            <div>
                < List items ={items} />
                <Employee name =" Louise" age ={32} position= " Software Engineee" />
                < GroceryList item1 = "Apples" item2 = "Oranges" item3= "Mangos"/>
            </div>
    )
}



const List = props => {
   const listItems = props.items.map((item,index)=> (
    <li key = {index}> {item.name} : {item.price}</li>
   ));
   return <ul>
    {listItems}
   </ul>
   }

const Employee= props => (
    <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.position}</li>
    </ul>
)


const GroceryList = props => (
    <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
    </ul>
)


  ReactDOM.render(<App />, document.getElementById('root'));
  