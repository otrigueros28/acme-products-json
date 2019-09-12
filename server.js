const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');

app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/users', (req, res, next) =>{
  res.send(db.getusers());
})

app.listen(3000, ()=> console.log('listening'));
