"use strict";
const expRouter = require("express").Router;
const multer = require("multer");
// const compareCtrl = require('./controller');

const router = expRouter();
const uploader = multer();

router.post("/test", uploader.array("transactions", 2), (req, res) => {
  // #swagger.tags = ['Test']
  // #swagger.summary = 'Test Endpoints'
  // #swagger.description = 'Upload two csv files.'
  // #swagger.consumes = ['multipart/form-data']
  // #swagger.produces = ['application/json']
  /*  #swagger.parameters['file_A'] = {
          in: 'files',
          type: 'file',
          required: 'true',
          description: 'Transactions file',
    } */
  /*  #swagger.parameters['file_B'] = {
          in: 'files',
          type: 'file',
          required: 'true',
          description: 'Transactions file',
    } */

  const files = req.files;

  console.log(files);
  console.log(req);

  try {
    console.log(files.map((file) => file));
    res.status(200).json({ message: "File Parsed with success" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
