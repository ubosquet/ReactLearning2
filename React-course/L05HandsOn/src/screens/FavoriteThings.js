import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const FavoriteThings =  ({ match }) => (
    <div>
      <h2>Home </h2> 
      <h2>Favorite Things</h2>
      <ul>
        <li>
          <Link to={`${match.url}/Lamborghini`}>Favorite Car</Link>
        </li>
        <li>
          <Link to={`${match.url}/Rice`}>Favorite Food</Link>
        </li>
        <li>
        <Link to={`${match.url}/Matrix`}>Favorite Movie</Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:thingsId`} component={Things} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please click  on a favorite Thing.</h3>}
      />
    </div>
  );

export default FavoriteThings;