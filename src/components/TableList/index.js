import React from 'react'
import TableRow from '../TableRow/'
import "./style.css"

function TableList(props) {
    // props.employees
    return (
        <div className="table-responsive">
            <table class="table table-striped table-bordered table-hover employeeTable">
                <thead className="table-dark">
                    <tr>
                        <th id="id" scope="col">Employee #</th>
                        <th id="firstname" scope="col">First Name</th>
                        <th id="lastname" scope="col">Last Name</th>
                        <th id="title" scope="col">Title</th>
                        <th id="phone" scope="col">Phone #</th>
                        <th id="email" scope="col">Email</th>
                        <th id="location" scope="col">Location</th>
                        <th id="dept" scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employee => <TableRow {...employee} />)}
                </tbody>
            </table></div>
    )
}

export default TableList
