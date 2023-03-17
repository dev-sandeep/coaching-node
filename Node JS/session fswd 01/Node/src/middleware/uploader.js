const express = require("express");
const app = express();
const env = require('dotenv');
const multer = require("multer");
const path = require("path");

env.config();

//Setting storage engine
const storageEngine = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
    },
});

// checking for the allowed file extensions
const checkFileType = function (file, cb) {
    //Allowed ext
    const fileTypes = /jpeg|jpg|png|gif|svg/;
  
    //check ext
    const extName = fileTypes.test(path.extname(file.originalname));
    console.log(path.extname(file.originalname));
  
    const mimeType = fileTypes.test(file.mimetype);
  
    if (mimeType && extName) {
      return cb(null, true);
    } else {
      cb("Error: You can Upload Images Only!!");
    }   
  };

export const upload = multer({
    storage: storageEngine,
    limits: { fileSize: 10000000 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },
});