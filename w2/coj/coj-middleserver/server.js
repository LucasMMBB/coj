const express = require('express');
const app = express();
const restRouter = require('./routes/rest');

app.use('/api/v1', restRouter);

app.get('/',(req,res)=>res.send("What's up?"));

app.listen(3000,()=>console.log('Example app running'));