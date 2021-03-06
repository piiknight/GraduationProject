var tiecNLModel = require("../models/tiec-nl.model.js");

var tiecNLService = {
    getAll: getAll,
    addOne: addOne,
    updateOne: updateOne,
    deleteOne: deleteOne,
    getById: getById,
    getAllByIdTiec: getAllByIdTiec
}

function getAll(objData) {
    return new Promise((resolve, reject) => {
        tiecNLModel.getAll(objData).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function addOne(objData) {
    return new Promise((resolve, reject) => {
        tiecNLModel.addOne(objData).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateOne(id, objData, callback) {
    return new Promise((resolve, reject) => {
        tiecNLModel.updateOne(id, objData).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function deleteOne(id) {
    return new Promise((resolve, reject) => {
        tiecNLModel.deleteOne(id).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getById(id) {
    return new Promise((resolve, reject) => {
        tiecNLModel.getById(id).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getAllByIdTiec(id) {
    return new Promise((resolve, reject) => {
        tiecNLModel.getAllByIdTiec(id).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

module.exports = tiecNLService
;

