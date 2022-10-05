require('dotenv').config();

const express = require('express')
const port = 3000


var indexRouter = require('./routes/index');
var helloworldRouter = require('./routes/helloworld');

var app = express();


app.use('/hello', helloworldRouter);
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// use .env files for secret keys from spotify and/or youtube
// console.log(process.env.USER_ID)

module.exports = app;
