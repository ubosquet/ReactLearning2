import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Topics from './screens/Topics';
import Contact from './screens/Contact';


const Index = ({ pathname }) => {
    switch (pathname) {
      case '/about':
        return <About />;
      case '/topics':
        return <Topics />;  
        case '/contact' :
            return <Contact />;
      default:
        return <Home />;
    }
  };
  
  let pathname = window.location.pathname;
  
  ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));
  
  window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
  });
  