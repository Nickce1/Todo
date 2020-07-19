import React from 'react'
import { Table } from 'react-bootstrap'
// import { SearchContext } from './Context'

export const SearchList = _ => {

	// const searchResult = useContext(SearchContext)
	// console.log(searchResult)

	// const searchListBody = searchResult.map (task => (
  //   <tr key={task.t_Id}>
  //     <td>{task.t_Id}</td>
  //     <td>{task.t_name}</td>
  //     <td>x</td>
  //   </tr>
  // ))

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>To Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* {searchListBody} */}
      </tbody>
		</Table>
  )
}