const tiecNLService = require('../services/tiec-nl.service');
var schema = require('../schema/tiecNLValidationSchema.json')
var iValidator = require('../../common/iValidator');
var errorCode = require('../../common/error-code');
var errorMessage = require('../../common/error-methods');

var url = "tiec-nl";
var urlRela = "tiec-id";
var nameModel = "tiec_nl";

function init(router) {
    router.route('/' + url)
        .get(getAll)
        .post(addOne);
    router.route('/' + url + '/:id')
        .get(getById)
        .delete(deleteOne)
        .put(updateOne);
    router.route('/' + url + '/' + urlRela + '/:id')
        .get(getAllByIdTiec);
}

function getAll(req, res) {
    tiecNLService.getAll().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

function addOne(req, res) {
    var objData = req.body;

    //Validating the input entity
    var json_format = iValidator.json_schema(schema.postSchema, objData, nameModel);
    if (json_format.valid == false) {
        return res.status(422).send(json_format.errorMessage);
    }

    tiecNLService.addOne(objData).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });

}

function updateOne(req, res) {
    var objData = req.body;
    var id = req.params.id;

    //Validating the input entity
    var json_format = iValidator.json_schema(schema.postSchema, objData, nameModel);
    if (json_format.valid == false) {
        return res.status(422).send(json_format.errorMessage);
    }

    tiecNLService.updateOne(id, objData).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}


function deleteOne(req, res) {
    var delId = req.params.id;
    tiecNLService.deleteOne(delId).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}

function getById(req, res) {

    let objId = req.params;

    var json_format = iValidator.json_schema(schema.getSchema, objId, nameModel);
    if (json_format.valid == false) {
        return res.status(422).send(json_format.errorMessage);
    }

    tiecNLService.getById(objId).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

function getAllByIdTiec(req, res) {

    let objId = req.params;

    var json_format = iValidator.json_schema(schema.getSchema, objId, nameModel);
    if (json_format.valid == false) {
        return res.status(422).send(json_format.errorMessage);
    }

    tiecNLService.getAllByIdTiec(objId).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

module.exports.init = init;



