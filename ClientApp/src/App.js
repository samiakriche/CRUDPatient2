import React from 'react';  

import AddPatient from './Patient/addPatient';  

import Patientlist from './Patient/PatientList';  
import Edit from './Patient/EditPatient';

//import EditStudent from './Student/EditStudent';  

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  

import './App.css';  

function App() {  

  return (  

    <Router>  

      <div className="container">  

        <nav className="navbar navbar-expand-lg navheader">  

          <div className="collapse navbar-collapse" >  

            <ul className="navbar-nav mr-auto">  

              <li className="nav-item">  

                <Link to={'/Addpatient'} className="nav-link">AddPatient</Link>  

              </li>  

              <li className="nav-item">  

                <Link to={'/Patientlist'} className="nav-link">Patient List</Link>  

              </li>  

            </ul>  

          </div>  

        </nav> <br />  

        <Switch>  

          <Route exact path='/Addpatient' component={AddPatient} />  
          <Route path='/Patientlist' component={Patientlist} />  
          <Route path='/edit/:id' component={Edit} /> 

          

        </Switch>  

      </div>  

    </Router>  

  );  

}  

export default App;