const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const path = require('path');

const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://coj:coj@ds231568.mlab.com:31568/coj');
} catch (error) {
    console.log(error);
}


app.use('/api/v1', restRouter);
app.use(express.static(path.join(__dirname, '../public')));

app.get('/',(req,res)=>res.send("What's up?"));

app.listen(3000,()=>console.log('Example app running'));

app.use((req, res) => {
    res.sendFile('index.html', {root:path.join(__dirname, '../public')});
});