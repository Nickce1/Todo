import React, { useState } from 'react'
import Styled  from 'styled-components'
import { Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'

import { AddTaskModal } from '../AddTaskModal'
import { SearchContext } from '../Context'

const Styles = Styled.div`
  @media screen and (max-width: 576px) {
    .navbar {
      .my-sm-1 {
        margin: 2px 0
      }
    }

    button.btn-100 {
      width: 100%;
    }
  }
`

const Navigation = () => {
  const [show, setShow] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const submitSearch = () => {
    fetch('http://localhost:4000/search', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({search: inputSearch})
    })
    .then(response => response.json())
    .then(response => setSearchResult(response.data))
    .catch(error => {
      if (error) {
        alert("Error when sending search request")
      }
    })
  }

  return (
    <SearchContext.Provider value={searchResult}>
      <Styles>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Navbar.Brand href="/">To Do App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Button className="btn-100 ml-auto mr-2 my-sm-1" variant="success" onClick={handleShow}>
              Add Task
            </Button>
            <NavDropdown.Divider className="d-md-none bg-transparent"/>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                onChange={(event) => setInputSearch(event.target.value)}
                value={inputSearch}
                className="mr-sm-2 my-sm-1"
              />
              <a href="/search">
                <Button variant="primary" className="btn-100 my-sm-1" onClick={submitSearch}>Search</Button>
              </a>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <AddTaskModal
          show = {show}
          handleClose = {handleClose}
        />
      </Styles>
    </SearchContext.Provider>
  )
}

export default Navigation