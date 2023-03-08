var AWS = require('aws-sdk');
var path = require("path");
var fs = require('fs');
const env = require('dotenv');
env.config();

const BUCKET_NAME = 'almabetter-sample-bucket-0303';

const uploadDir = function(s3Path, bucketName) {
    /**
     * creating AWS instance
     */
    let s3 = new AWS.S3({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET
    });

    function walkSync(currentDirPath, callback) {
        fs.readdirSync(currentDirPath).forEach(function (name) {
            console.log("--", currentDirPath);
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath, stat);
            } else if (stat.isDirectory()) {
                walkSync(filePath, callback);
            }
        });
    }

    walkSync(s3Path, function(filePath, stat) {
        let bucketPath = filePath.substring(s3Path.length-1);
        console.log(s3Path, bucketPath);
        let params = {Bucket: bucketName, Key: bucketPath, Body: fs.readFileSync(filePath) };
        s3.putObject(params, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log('Successfully uploaded '+ bucketPath +' to ' + bucketName);
            }
        });

    });
};

uploadDir('./static', BUCKET_NAME);
