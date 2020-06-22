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

app.get('/', (req, res) => {
  // res.send('Hello world !')
  const allTasks = connection.query ( ALL_TASKS_QUERY, ( error, result ) => {
    if (error) {
      console.log("------------All tasks query error------------");
      console.log("Query error : ");
      res.send(error)
    }
    else {
      res.json({
        data: result
      })
    }
  })
})

app.get('/allTasks', (req, res) => {
  
})

app.listen(4000, () => {
  console.log('Listen to port 4000...')
})