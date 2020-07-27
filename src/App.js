import React, { useState } from 'react'
import Header from './components/Header'
import Title from './components/Title'
import TableFilter from './components/TableFilter/'
import TableOrder from './components/TableOrder/'
import TableList from './components/TableList/'
import employees from './utils/employees.json'
import Footer from './components/Footer'
import './style.css'
function App() {
  const [employeeTable, setList] = useState({ list: employees, filter: '', order: 'id' })

  function updateFilter(filter) {
    const filterList = employees.filter(employee => employee.firstName.toLowerCase().indexOf(filter.toLowerCase()) > -1)
    setList({ ...employeeTable, filter, list: filterList })
  }

  function updateSortOrder(order) {
    const newSortedList = employeeTable.list.sort(function (a, b) {
      return a[order] > b[order] ? 1 : -1;
    })
    setList({ ...employeeTable, order, list: newSortedList })
  }

  return (
    <div class="row d-flex justify-content-center container">

      <Header />
      <Title />
      <form>
        <TableFilter filter={employeeTable.filter} updateFilter={updateFilter} />
        <TableOrder order={employeeTable.order} updateSortOrder={updateSortOrder} />
      </form>

      <TableList employees={employeeTable.list} />
      <Footer />
    </div>
  )
}

export default App;
