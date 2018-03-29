import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListEmployees from './ListEmployees'
import ShowDetails from './ShowDetails'


class App extends Component {
  state = {
    currentId: '',
    employees: []
  }

  componentDidMount() {
    fetch("http://localhost:8080/employee-portal-api/employees", { headers: {'Accept': 'application/json'}})
    .then((resp) => {
      resp.json().then((data) => {
        console.log(data);
        this.setState({employees: data});
      })
    })
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
