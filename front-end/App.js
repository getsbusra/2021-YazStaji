import './App.css';
import React from 'react';

import ListCustomerComponent from './components/ListCustomersComponent';
import CreateCustomersComponent from './components/CreateCustomersComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdateCustomersComponent from './components/UpdateCustomersComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListCustomerComponent}></Route>
            <Route path="/customers" component={ListCustomerComponent}></Route>
            <Route path="/add-customers/:id" component={CreateCustomersComponent}></Route>
            <Route path="/update-customers/:id" component={UpdateCustomersComponent}></Route>
            <ListCustomerComponent />
          </Switch>
        </div>

      </Router>
    </div>

  );
}

export default App;
