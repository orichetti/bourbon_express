const knex = require("./knex")

function createBourbon(bourbon){
    return knex("bourbon").insert(bourbon)
}

function getAllBourbon(){
    return knex("bourbon").select("oid", "*")
}

function deleteBourbon(id){
    return knex("bourbon").where("oid", id).del()
}

function updateBourbon(id, bourbon){
    return knex("bourbon").where("oid", id).update(bourbon)
}

function getById(id){
    return knex.raw('SELECT * FROM bourbon WHERE oid = ' + id)
}

module.exports = {
    createBourbon,
    getAllBourbon,
    deleteBourbon,
    updateBourbon,
    getById,
}