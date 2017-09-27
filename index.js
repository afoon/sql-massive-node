
//  ||||||||||||||     requires          |||||||||||||||||

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const {dbUser, database} = require('./config')

const port = 3000;
const connectionString = `postgres://${dbUser}@localhost/${database}`

const app = module.exports = express();


//  ||||||||||||||     middleware          |||||||||||||||||
app.use(bodyParser.json());
app.use(cors());

const massiveConnection = massive(connectionString)
.then(db => {
    app.set('db', db);
})
.catch(err => {
    console.log(err);
});


//  ||||||||||||||     controllers         |||||||||||||||||

const productCtrl = require('./products_controller');

//  ||||||||||||||     endpoints           |||||||||||||||||
app.get('/api/products/:id', productCtrl.getOne);
app.get('/api/products', productCtrl.getAll);
app.put('/api/products/:id', productCtrl.update);
app.post('/api/product', productCtrl.create);
app.delete('/api/products/:id', productCtrl.deletes)

app.listen(port,()=>{console.log(`Issa port named ${port}`)});
