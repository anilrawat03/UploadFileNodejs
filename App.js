const express = require('express'), bodyParser = require('body-parser'),fileupload = require("express-fileupload");
  const fileuploadroute=require("./routes/FileUpload.route")
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

app.listen(3000, function() {
    console.log('listening on 3000')
  });
  app.use("/fileupload",fileuploadroute);

