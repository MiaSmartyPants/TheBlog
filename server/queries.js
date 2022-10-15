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

  const getLoginInfo = (request, response) => {
    pool.query('SELECT * FROM login ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getSingleUser = (request, response) => {
    const username = (request.params.username)
  console.log(username);
    pool.query('SELECT * FROM login WHERE username = $1', [username], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }




  module.exports = {
  
      getBlogPosts,
      getLoginInfo,
      getSingleUser

  }