import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

export const AddTaskModal = props => {
  const[taskName, setTaskName] = useState('')

  const postNewTaskValue = () => {
    const bodyAdd = {
      t_name: taskName,
      t_etat: false
    }

    fetch('http://localhost:4000/addTask', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(bodyAdd)
    })
    .then(response => response.json())
    .then(response => console.log(response.data))
    .catch(error => {
      console.log("Task add error")
      console.log(error)
    })
    props.handleClose()
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false} >
      <Modal.Header closeButton>
        <Modal.Title>Add task to do</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Task Name:
          </Form.Label>
          <Col sm={9}>
            <Form.Control 
              type="text" 
              value={taskName} 
              onChange={event => setTaskName(event.target.value)} 
              placeholder="Task name" 
            />
          </Col>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={postNewTaskValue}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}
