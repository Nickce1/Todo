import React,  {useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'

export const TasksList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getAllTasks();
  }, [])

  const getAllTasks = () => {
    fetch('http://localhost:4000')
    .then(res => res.json())
    .then(res => setTasks(res.data))
    .catch(err => {
      console.log('--------------Error on getting all tasks-------------')
      console.log(err)
    })
  }

  const TasksListBody = tasks.map (task => (
    <tr key={task.t_Id}>
      <td>{task.t_Id}</td>
      <td>{task.t_name}</td>
      <td>x</td>
    </tr>
  ))

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
        {TasksListBody}
      </tbody>
    </Table>
  )
}