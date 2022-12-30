
const { saveFile ,deleteFile}=require("../Services/fileservice");
exports.uploadfile = function (req, res)
 {
    console.log(req.body);
    console.log("filecount==>", req.files.length); 

for(let file1 in req.files)
{
    console.log("file1",file1);
    const response=saveFile(req.files[file1],"/profile/");
    console.log(response);
}
    res.send("response");
};

exports.deletefile=function(req,res)
{
    console.log(req.query.filepath);
    let response=deleteFile(req.query.filepath);
    res.send(response);
}