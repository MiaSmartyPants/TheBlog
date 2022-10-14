
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5050;
const cors = require('cors')


app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    console.log("server");
     res.send("this will be data")
   })



app.get('/blogposts', db.getBlogPosts)





app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })