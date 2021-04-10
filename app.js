var compression = require('compression')
const express = require("express");
const jwt = require('jsonwebtoken');
const cors = require('cors');
const db = require('./app/dbconfig/db');
const fileUpload = require('express-fileupload');
const config = require('./config');
const {NODE_ENV} = require('./config');
const helmet= require('helmet');
// const multer = require('multer');


// importing routers


const customerleadsrouter = require('./app/router/customerlead.router');
const adminRouter = require('./app/router/admin.router');
const imageRouter = require('./app/router/image.router');
const reviewRouter = require('./app/router/review.router');
const socialRouter = require('./app/router/social.router');
const videoRouter = require('./app/router/video.router');
const loginRouter = require('./app/router/login.router')




const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
})


// parse requests of content-type: application/json
app.use(express.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.use express.static
app.use(express.static(process.cwd() + "/public/dist/hdDesign"));
app.use(express.static(process.cwd() + "/public/images"));
app.use(express.static(process.cwd() + "/public/images/gallery"));
app.use(express.static(process.cwd() + "/public/distadmin/hdDesign"))



// usinng compression module
app.use(compression())

// npm use cors 
app.use(cors());

app.use(helmet())

// using fileuploads;
app.use(fileUpload());





// simple route
app.get("/", (req, res) => {
  res.status(200).sendFile(process.cwd() + "/public/dist/hdDesign/index.html");
});

app.get("/manage", (req, res) => {
  res.status(200).sendFile(process.cwd() + "/public/distadmin/hdDesign/index.html");
})


// using review router
app.use("/customer", customerleadsrouter)
app.use('/admin', adminRouter);
app.use('/image', imageRouter);
app.use('/review', reviewRouter);
app.use('/social', socialRouter);
app.use('/video', videoRouter);
app.use('/login', loginRouter);

console.log(NODE_ENV);


// set port, listen for requests
app.listen(`${config.PORT}`, () => {
  console.log(`Server is running on port${config.PORT}`);
});

module.exports = app;
