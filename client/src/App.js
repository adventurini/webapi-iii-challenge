import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import {Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route path ='/' exact component={Users}></Route>
        <Route path ='/users' component ={Users}></Route>
        {/* <Route path ='/users:id' component ={User}></Route> */}
        </Switch>
      </div>
    );
  }
}

export default App;
