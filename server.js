const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'todo',
  password: 'asdcxz1+'
})

console.log('--------------Connecting to the DB---------------')
con.connect (error => {
  if (error) {
    console.log("Connection error: ")
    console.log(error)
    console.log('\n\n--------------Connecting to the DB---------------')
  }
  else
    console.log("Connection established !")
    console.log('--------------Connected to the DB---------------')
})

const ALL_TASKS_QUERY = `SELECT * FROM task WHERE t_etat = 0`

const queryAllTasks = (res) => {
  con.query(ALL_TASKS_QUERY, (error, result) => {
    if (error) {
      console.log('Error when querrying All Tasks')
      console.log(error)
    }
    else res.json({
      data: result
    })
  })
}

app.get('/', (req, res) => {
  queryAllTasks(res);
})

app.post('/addTask', (req, res) => {
  console.log('----------------QUERY INSERT-----------------')
  console.log(req.body)
  const INSERT_TASK_QUERY = `INSERT INTO TASK (t_name, t_etat) VALUES ('${req.body.t_name}', ${req.body.t_etat})`
  con.query(INSERT_TASK_QUERY, (error) => {
    if (error) {
      console.log('----------------QUERY INSERT ERROR-----------------')
      console.log(error)
      console.log('----------------END QUERY INSERT ERROR-----------------')
    }
    else {
      console.log('----------------TASK INSERTED SUCCESSFULLY-----------------')
      queryAllTasks(res)
    }
  })
})

app.post('/search', (req, res) => {
  const SEARCH_QUERY = `SELECT * FROM task WHERE t_name LIKE '%${req.body.search}%';`
  console.log(SEARCH_QUERY)
  con.query(SEARCH_QUERY, (error, result) => {
    if (error) {
      console.log('----------------SEARCH ERROR-----------------')
      console.log(error)
      console.log('----------------END SEARCH ERROR-----------------')
    }
    else {
      console.log('----------------SEARCH QUERY COMPLETED-----------------')
      res.json({
        data: result
      })
    }
  })
})

app.listen(4000, () => console.log("Listen to port 4000..."))