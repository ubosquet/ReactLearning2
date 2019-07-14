import React from 'react';
import ReactDOM from 'react-dom';



const favColors = React.createElement('ol', {}, 
React.createElement('li', {}, 'Black'),
React.createElement('li', {}, 'Blue'),
React.createElement('li', {}, 'White'));

const favMusic = React.createElement('ol', {}, 
React.createElement('li', {}, 'Stromae'),
React.createElement('li', {}, 'Sexion Dassaut'),
React.createElement('li', {}, 'Michael Jackson'));

const favFood = React.createElement('ol', {}, 
React.createElement('li', {}, 'White Rice'),
React.createElement('li', {}, 'Spaghetti'),
React.createElement('li', {}, 'Smashed Vegetables'));

const favWebsite = React.createElement('ol', {}, 
React.createElement('li', {}, React.createElement('a', {href :'https://www.google.com'}, 'Google.com')),
React.createElement('li', {}, React.createElement('a', {href :'https://www.freecodecamp.org'}, 'FreeCodeCamp.org')),
React.createElement('li', {}, React.createElement('a', {href :'https://www.linkedin.com'}, 'LinkedIn.com'))
);

const favList = React.createElement(
    'ul', 
     {}, 
     React.createElement('li', {className : 'favoriteColors'}, 'Favorite Colors', favColors),
      React.createElement('li', {className : 'favoriteMusic'}, 'Favorite Music', favMusic),
      React.createElement('li', {className : 'favoriteFood'},'Favorite Food', favFood),
      React.createElement('li', {className : 'favoriteWebsite'}, 'Favorite Websites', favWebsite)
      );

ReactDOM.render(  React.createElement( 'h1', {className: 'greeting'},'My Favorite Things')
    ,
  document.getElementById('header')
);

ReactDOM.render( favList,
  document.getElementById('root') 
  );