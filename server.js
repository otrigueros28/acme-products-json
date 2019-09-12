const express = require('express');
const path = require('path');
const app = express();
const dbFunction = require('./db');
const db = dbFunction();

app.use(express.json());

app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', (req, res, next) =>{
  res.sendFile(path.join(__dirname, 'products.json'))
});

app.get('/api/products', async (res, req, next)=>{
  try {
    res.send(await db.findAll())
  }
  catch(ex) {
    next(ex);
  }
});

app.get('/api/products/:id', (req, res, next) =>{
  res.sendFile(path.join(__dirname, 'products.json'))
});

app.delete('/api/products/:id', async (req, res, next)=>{
  try{
    res.send(await db.destroy(id))
  }
  catch(ex){
    next(ex)
  }
})

app.listen(3000, () => console.log('listening'));
