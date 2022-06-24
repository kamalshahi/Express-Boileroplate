const express = require('express')
const app = express()

const routes = require('./routes');

app.use(routes);


app.listen(3000, (err) => {
  console.log('Listening to port 3000')
})
