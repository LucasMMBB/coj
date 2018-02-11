const express = require('express');
const app = express();
const restRouter = require('./routes/rest');

const mongoose = require('mongoose');


try {
    mongoose.connect('mongodb://coj:coj@ds231568.mlab.com:31568/coj');
} catch (error) {
    console.log(error);
}

app.use('/api/v1', restRouter);

app.get('/',(req,res)=>res.send("What's up?"));

app.listen(3000,()=>console.log('Example app running'));