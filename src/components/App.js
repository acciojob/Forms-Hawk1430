import React from 'react'
import { Routes, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
import './../styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul> 
            <li>
              <Link id='form-link' to="/form">Form</Link>
            </li>
            <li>
              <Link id='form-ref-link' to="/form-ref">FormRef</Link>
            </li>
            <li>
              <Link id='form-state-link' to="/form-state">FormState</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/form' element={<Form/>} />
          <Route path='/form-ref' element={<FormRef/>} />
          <Route path='/form-state' element={<FormState/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App