import React from 'react';
import ReactDOM from 'react-dom';


const applesPrice = React.createElement('li', {}, '$1.50 per lb');
const  apples = React.createElement('ul', {}, applesPrice);

const orangesPrice = React.createElement('li', {}, '$2.50 per lb');
const oranges =  React.createElement('ul', {}, orangesPrice);

const mangosPrice = React.createElement('li', {}, '$3.50 per lb');
const mangos = React.createElement('ul', {}, mangosPrice);

ReactDOM.render(
   React.createElement(
  'u', 
   {}, 
   React.createElement('li', {}, 'Apples', apples),
    React.createElement('li', {}, 'Oranges', oranges),
    React.createElement('li', {}, 'Mangos', mangos)
    ),
    document.getElementById('root')
  );
