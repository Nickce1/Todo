const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const connection = mysql.createConnection ({
  host: "localhost",
  user: "root",
  database: "todo",
  password: "asdcxz1+"
})

console.log("Connecting to the database...")
console.log("--------------------------Begin------------------------")
connection.connect(err => {
  if (err) {
    console.log("Error when connecting to the database: ")
    console.log(err)
    console.log("--------------------------End------------------------")
  }
  else {
    console.log("Connected to the database.")
    console.log("--------------------------End------------------------")
  }
})

const ALL_TASKS_QUERY = "SELECT * FROM TASK"

const QUERY_ALL = (res) => {
  connection.query ( ALL_TASKS_QUERY, ( error, result ) => {
    if (error) {
      console.log("------------All tasks query error------------");
      console.log("Query all error : ");
      res.send(error)
    }
    else {
      res.json({
        data: result
      })
    }
  })
}

app.get('/', (req, res) => {
  QUERY_ALL(res)
})

// const name = "finish CRUD operations"
// const state = false

// const name = "Implement the back-end"
// const state = true

// connection.query ( `INSERT INTO task (t_name, t_etat) VALUES ( "${name}", ${state} );`)

app.post('/insertTask', (req, res) => {
  const insertQuery = `INSERT INTO task (t_name, t_etat) VALUES ("${req.t_name}", ${req.t_state})`
  connection.query(insertQuery, (err, result) => {
    if (err) {
      console.log("------------InsertTask query error------------");
      console.log("Insert query error : ");
      res.send(error)
    }
    else {
      QUERY_ALL(res)
    }
  })
})

app.listen(4000, () => {
  console.log('Listen to port 4000...')
})