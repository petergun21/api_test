const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors')
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '123456789',
      database: 'check_db'
    }
  })


const app = express()
const port = 7000
app.use((req, res, next) => {
    req.knex = knex
    next()
  })

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => res.send(req.body))
app.post('/hello', (req, res) => res.send(req.body))
//app.get('/student/:code', (req, res) => res.send(req.params))
app.get('/naja', (req, res) => res.send('<h1>page4</h1>'))
app.get('/teacher/:code', (req, res) => res.send(req.params))
app.get('/student',async (req, res) => {
    let rows = await req.knex('student')
    res.send({
        status: 1,
        std: rows
    })
app.get('/teacher',async (req, res) => {
        let rows = await req.knex('teacher')
        res.send({
            status: 1,
            teacher: rows
        })

})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))