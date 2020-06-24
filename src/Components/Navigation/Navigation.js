import React, { useState } from 'react'
import { Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { AddTaskModal } from '../AddTaskModal'
import Styled  from 'styled-components'

const Styles = Styled.div`
  @media screen and (max-width: 576px) {
    .navbar {
      .my-sm-1 {
        margin: 2px 0
      }
    }
  }
`

const Navigation = () => {
  let [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <Styles>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href="/">To Do App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Button className="ml-auto mr-2 col-sm-12 my-sm-1" variant="success" onClick={handleShow}>
            Add Task
          </Button>
          <NavDropdown.Divider className="d-md-none bg-transparent"/>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 my-sm-1" />
            <Button variant="primary" className="col-sm-12 my-sm-1">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <AddTaskModal
        show = {show}
        handleClose = {handleClose}
      />
    </Styles>
  )
}

export default Navigation