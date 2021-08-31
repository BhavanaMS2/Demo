import logo from './logo.svg';
import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ViewTenant from './components/ViewTenant';
import AddUser from './components/AddUser';

function App() {
  return (
    <Router>
            <React.Fragment>
              <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/table">DEMO APP</Link>
                </div>
                      <ul className="navbar-nav ">
                          <li className="nav-item">
                          <Link className="nav-link" to="/table">View Tenant</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link" to="/adduser">Add User</Link>
                          </li>
                  
                       </ul>
              </nav>
              <br/>
              <div>
               <Route exact path="/table" component={ViewTenant} />
               <Route path="/adduser" component={AddUser} />    
               </div>

            </React.Fragment>
          </Router>   
    
  );
}

export default App;
