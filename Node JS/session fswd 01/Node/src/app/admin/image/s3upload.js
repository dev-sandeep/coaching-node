const AWS = require('aws-sdk');
const fs = require('fs');
const env = require('dotenv');
const {getTempImageName} = require('./../../../utils/getTempImageName');
env.config();

exports.uploadToS3 = async (fileName) => {
    // configure AWS SDK with your access key and secret access key
    AWS.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET
    });

    // create an S3 object
    const s3 = new AWS.S3();

    // define the bucket name and key of the object to be uploaded
    const bucketName = process.env.BUCKET;
    const keyName = fileName;

    // read the image file into a buffer
    const tempImg = await getTempImageName();

    const fileContent = fs.readFileSync('./images/'+tempImg);

    // set the parameters for the S3 upload
    const params = {
        Bucket: bucketName,
        Key: keyName,
        Body: fileContent,
        ACL: 'public-read',
        ContentType: 'image/jpeg', // or the MIME type of your image file
    };

    // upload the image to S3
    return new Promise((resolve, reject)=>{
        s3.upload(params, function (err, data) {
            if (err) {
                reject({error: err});
            } else {
                 resolve({location: data.Location});
            }
        });
    });
}
