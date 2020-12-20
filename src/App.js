import React from 'react';
// import './App.css';
import './Components/styles.scss';
import License from './Components/License.js';

// import logo from './logo.jpeg'; // with import
// const logo = require('./logo.jpeg); // with require

import alex from './Assets/alex.jpg';
import mary from './Assets/mary.jpg';
import sydney from './Assets/sydney.jpg';
// const image = require('./Assets/test.jpg');

function App() {
  return (
    <div className='container'>
      <br />
      <License image={alex} name='Alex' state='Chicago' age='25' />
      <License image={mary} name='Mary' state='Florida' age='28' />
      <License image={sydney} name='Sydney' state='Texas' age='17' />
    </div>
  );
}

export default App;
