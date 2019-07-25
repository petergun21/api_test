const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

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
const port = 7001


app.use((req, res, next) => {
  req.knex = knex
  next()
})
app.use(bodyParser.json())
app.use(cors())
app.use(function(req, res, next){
  console.log("hello middle ware")
   // ตรวจสอบการ login ได้
  // if(){
  // res.send('sorry')
  // req.hello = "id session"
  // }else{
  //   next()
  // }
  next()
})

app.get('/student/:id', async (req, res) => {
   console.log(req.params.id)  // http://localhost:7001/?id=6139010007  // query
  if(req.params.id){
    // select * from teacher_teach
  //   let rows = await knex('teacher_teach').where("std_code","=",req.params.id)
    let rows = await knex.raw(`SELECT  std_code,std_name,cou_thai,cou_unit,grade  FROM teacher_teach WHERE std_code=${req.params.id}`)

          console.log('hello')
          res.send({
            ok:1,
            student:rows,
          })
  }
  console.log('std')
})
app.get('/student', (req, res) => {
  console.log(req.query)  // http://localhost:7001/?id=6139010007  // query
   res.send({
    ok: req.body,
    status: "query"
  })
})
app.post('/student/code/:id?', bodyParser.urlencoded({extended: false}),(req, res) => {
  console.log('ok')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))