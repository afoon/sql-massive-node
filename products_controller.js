const app  = require('./index.js');

const create = (req,res,next) =>{
    const db = app.get('db');
    const {name,description, price,imageurl} = req.body
    db.create_product([name,description,price,imageurl]).then(response => {res.status(200).json(response)
    })
    .catch(err => {
    res.status(500);
});
};
const getOne = (req,res,next) =>{
    const db = app.get('db');
    db.read_product([req.params.id]).then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
    res.status(500);
});
};
const getAll = (req,res,next) =>{
    const db = req.app.get('db');
    db.read_products().then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
    res.status(500);
});
};
const update = (req,res,next) =>{
    const db = req.app.get('db');
    const {params,query} = req
    db.update_product([params.id, query.descriptions]).then(response => {res.status(200).json(response)
    })
    .catch(err => {
    res.status(500);
});
};
const deletes = (req,res,next) =>{
    const db = app.get('db');
    db.delete_product([req.params.id]).then(response => {res.status(200).json(response)
    })
    .catch(err => {
    res.status(500);
});
};

module.exports = {
    create,
    getOne,
    getAll,
    update,
    deletes
};