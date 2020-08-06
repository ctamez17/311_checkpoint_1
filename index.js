const express = require('express')
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users')

const app = express()
const port = process.env.PORT || 4001

app.get('/', (req, res) => res.send('default route'))
app.use(bodyParser.json());
app.use(usersRoutes);

app.listen(port, () => {
  console.log('app is listening on:', port)
})