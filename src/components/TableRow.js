import React from 'react'

function TableRow(props) {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.title}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.location}</td>
            <td>{props.dept}</td>
        </tr>
    )
}

export default TableRow