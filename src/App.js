import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListEmployees from './ListEmployees'
import ShowDetails from './ShowDetails'


class App extends Component {
  state = {
    currentId: '',
    employees: [
      {
        "id": "1",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "salary": 90000,
        "hiredate": "20161201"
      },
      {
        "id": "2",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "salary": 70000,
        "hiredate": "20171001"
      },
      {
        "id": "3",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "salary": 80000,
        "hiredate": "20171201"
      },
      {
        "id": "4",
        "name": "Gayle Mcdowell",
        "email": "gayle@gmail.com",
        "salary": 100000,
        "hiredate": "20151201"
      },
      {
        "id": "5",
        "name": "Alice Hanna",
        "email": "alice@gmail.com",
        "salary": 60000,
        "hiredate": "20160520"
      }
    ]
  }

  setCurrentId = (id) => {
    this.setState({ currentId: id});
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListEmployees
            employees={this.state.employees}
            onSetCurrentId={this.setCurrentId}
          />
        )}/>

        <Route path="/detail" render={() => (
          <ShowDetails
            currentId={this.state.currentId}
            employees={this.state.employees}
          />
        )}/>
      </div>
    )
  }
}

export default App;
