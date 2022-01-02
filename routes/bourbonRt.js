const { request } = require('express');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const db_path = path.resolve(__dirname, 'Bourbon.db');
// const db = '../Bourbon.db';
const dbB = require ('../db/bourbon');
//const dbT = require('../../db/testdbconnection');

const dbc = new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE, (err) => {
    dbc.all("select name from sqlite_master where type='table'", function (err, table) {
        console.log(table)});
        if(err) {return console.error(err.message)}});
        console.log(`Connection Succsessful to:`, dbc);

router.get('/', async(req, res) => {
    const data = await dbB.getAllBourbon()
    res.send(JSON.stringify(data))
});
dbB.getAllBourbon()

router.get('/:id', async(req, res) => {
    const id = await req.body.id
    console.log(id)
    const data = await dbB.getById(req.body.id)
    res.send(JSON.stringify(data))
})

router.post('/', async(req, res) => {
    const formData = req.body.formData;
    const results = await dbB.createBourbon(formData);
    res.send(results);
});

router.patch('/:id', async(req, res) => {
    const formData = req.body.formData
    const id = formData.id
    const results = await dbB.updateBourbon(id, {
            name: formData.name,
            brand: formData.brand,
            distiller: formData.distiller,
            age: formData.age,
            proof: formData.proof,
            alcVol: formData.alcVol,
            type: formData.type,
            size: formData.size,
            distWebsite: formData.distWebsite
    })
    res.send(results + "");
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id
    console.log(id)
    const results = await dbB.deleteBourbon(id)
    res.send(results + "");
});

module.exports = router;