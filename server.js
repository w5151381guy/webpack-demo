const fs = require('fs')
const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()
app.use(history({ index: '/' }))

app.get('/', (req, res) => {
  fs.createReadStream('./index.html').pipe(res)
})

app.use('/dist', express.static('dist'))

app.listen(8080)
