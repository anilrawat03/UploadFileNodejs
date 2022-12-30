const {
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');
var settings = require("../settings");
var path = require('path');
var fs = require('fs');
const saveFile = (file, folder) => {
    debugger;
    console.log("d",settings.PROJECT_DIR);
    var staticpath = "/uploadfile";
    let filedir = settings.PROJECT_DIR + staticpath + folder;
    let filename = uuidv1() + path.extname(file.name);
    let filepath = staticpath + folder + filename;
    if (!fs.existsSync(filedir)) {
        fs.mkdirSync(filedir);
    }
    file.mv(settings.PROJECT_DIR + filepath);
    return {
        path: filepath,
        filename: file.name,
    }
}
const deleteFile = (filepath) => {
    try {
        fs.unlinkSync(settings.PROJECT_DIR + filepath);
        return "File has been deleted successfully";
    }
    catch (error) {
        return "something went wrong";
    }
}
module.exports = { saveFile,deleteFile };