const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'blogposts',
  password: 'password',
  port: 5432,
})


const getBlogPosts = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }




  module.exports = {
  
      getBlogPosts,

  }