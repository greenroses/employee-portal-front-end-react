import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListEmployees extends Component {

    state = {
      query: '',
      sortingCriteria: 'name'
    }

    updateQuery = (query) => {
      this.setState({ query: query.trim() });
    }

    clearQuery = () => {
      this.setState({query: ''});
    }

    sortByHireDate = () => {
      this.setState({sortingCriteria: 'hiredate'});
    }

    sortByName = () => {
      this.setState({sortingCriteria: 'name'});
    }

    sortBySalary = () => {
      this.setState({sortingCriteria: 'salary'});
    }


    render() {
      const { employees } = this.props;
      const { query, sortingCriteria } = this.state;
      let showingEmployees;
      if (query) {
        const match = new RegExp(escapeRegExp(query), 'i');
        showingEmployees = employees.filter((employee) => match.test(employee.name));
      } else {
        showingEmployees = employees;
      }

      showingEmployees.sort(sortBy(sortingCriteria));

      return (
        <div className="list-employees">
          <div className="list-employees-top">
            <input
              className='search-employees'
              type='text'
              placeholder='Search employees'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

            {showingEmployees.length !== employees.length && (
              <div className='showing-employees'>
                <span>Now showing {showingEmployees.length} of {employees.length} total</span>
                <button onClick={this.clearQuery}>Show all</button>
              </div>
            )}

            <button className="sort-button" onClick={this.sortBySalary}>
              sort by salary
            </button>
            <button className="sort-button" onClick={this.sortByName}>
              sort by name
            </button>
            <button className="sort-button" onClick={this.sortByHireDate}>
              sort by hire date
            </button>
          </div>
          <ol className='employee-list'>
            <li className='employee-list-item'>
              <div className='employee-info wrapper'>
                <span id="span1">Name</span>
                <span id="span2">Salary</span>
                <span id="span3">Hire date</span>
              </div>
              <span>More info</span>
            </li>
            {showingEmployees.map((employee) => (
              <li key={employee.id} className='employee-list-item'>
                <div className='employee-info wrapper'>
                  <span id="span1">{employee.name}</span>
                  <span id="span2">{employee.salary}</span>
                  <span id="span3">{employee.hiredate}</span>
                </div>
                <Link
                  to="/detail"
                  className="show-detail"
                  onClick={() => this.props.onSetCurrentId(employee.id)}
                >show details</Link>
              </li>
            ))}
          </ol>
        </div>

      )
    }
}

export default ListEmployees
