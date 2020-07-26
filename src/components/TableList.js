import React from 'react'
import TableRow from './TableRow'
import Table from 'react-bootstrap/Table'

function TableList(props) {
    // props.employees
    return (
        <Table striped bordered hover responsive table-sm="true">
            <thead>
                <tr>
                    <th scope="col">Employee #</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Phone #</th>
                    <th scope="col">Email</th>
                    <th scope="col">Location</th>
                    <th scope="col">Department</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => <TableRow {...employee} />)}
            </tbody>
        </Table>
    )
}

export default TableList
