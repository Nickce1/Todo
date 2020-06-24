import React from 'react'
import {Modal, Button, Form, Row, Col} from 'react-bootstrap'

export const AddTaskModal = props => {
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
            <Form.Control type="text" placeholder="Task name" />
          </Col>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="success">Add</Button>
      </Modal.Footer>
    </Modal>
  )
}
