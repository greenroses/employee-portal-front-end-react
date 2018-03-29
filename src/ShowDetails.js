import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ShowDetails extends Component {

  render() {
    const { currentId, employees } = this.props;
    let currentEmployee = employees.filter(e => e.id === currentId);
    return (
      <div className="list-employees">
        <div className="list-employees-top">
          <h2>Employee details</h2>
        </div>

        <ol className='employee-list'>
          {currentEmployee.map((employee) => (
            <li key={employee.id} className='employee-list-item'>
              <div className='employee-details'>
                <p>Name: {employee.name}</p>
                <p>Salary: {employee.salary}</p>
                <p>Hire date: {employee.hiredate}</p>
                <p>Email: {employee.email}</p>
                <p>Id: {employee.id}</p>
              </div>
            </li>
          ))}
        </ol>

        <Link className="close-employee-detail" to="/">Close</Link>

      </div>
    )
  }
}

export default ShowDetails
