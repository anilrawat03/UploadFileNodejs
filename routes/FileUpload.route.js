const express = require('express');
const router = express.Router();
const fileuploadcontroller = require('../Controller/FileUpload.Controller');
router.post('/uploadfile', fileuploadcontroller.uploadfile);
router.delete('/deletefile', fileuploadcontroller.deletefile);
module.exports = router;