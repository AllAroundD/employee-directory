import React from 'react'

function TableOrder(props) {
    // when the sort is changed, call the parent updateSortOrder function to refresh the list
    function changeOrder(event) {
        const { value } = event.target
        props.updateSortOrder(value)
    }
    return (
        <div class="mb-3 row">
            <label for="sort" class="col-sm-2 col-form-label">Sort by column</label>
            <div class="col-sm-10">
                <select id="sort" onChange={changeOrder} value={props.order} class="form-select form-select-lg mb-3">
                    <option value="id">Employee #</option>
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
