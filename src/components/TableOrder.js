import React from 'react'

function TableOrder(props) {

    function changeOrder(event) {
        const { name, value } = event.target
        // console.log(`[changeOrder] name(${name}) value(${value})`, event)

        props.updateOrder(value)
    }
    return (
        <div class="mb-3 row">
            <label for="sort" class="col-sm-2 col-form-label">Sort</label>
            <div class="col-sm-10">
                <select id="sort" onChange={changeOrder} value={props.order} class="form-select form-select-lg mb-3">
                    <option value="id" selected>ID</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="title">Title</option>
                    <option value="phone">Phone #</option>
                    <option value="email">Email</option>
                    <option value="location">Location</option>
                    <option value="dept">Department</option>
                </select>
            </div>
        </div>
    )
}

export default TableOrder
