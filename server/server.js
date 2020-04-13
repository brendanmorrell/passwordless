const express = require('express')
const app = express()
const firebase = require('./firebase')

app.get('/sign-in', (_, res) => {
  console.log('sign in hit')
  res.send('heyo')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server listening on port ${PORT}...`))
