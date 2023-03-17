exports.uploadImage = (req, res) => {

    var fs = require('fs');
    var multer = require('multer');
    var AWS = require('aws-sdk');
    var path = require('path');
    const env = require('dotenv');
    env.config();

    var awsCredFile = path.join(__dirname, '.', 'aconfig.json');

    console.log('awsCredFile is');
    console.log(awsCredFile);

    AWS.config.loadFromPath(awsCredFile);

    const photoBucket = new AWS.S3({ 
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET,
        params: { Bucket: 'foodadda' } 
    });

    var sampleFile = {
        "_id": 345345,
        "fieldname": "uploads[]",
        "originalname": "IMG_1030.JPG",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "./public/images/uploads",
        "filename": "31a66c51883595e74ab7ae5e66fb2ab8",
        "path": "/images/uploads/31a66c51883595e74ab7ae5e66fb2ab8",
        "size": 251556,
        "user": "579fbe61adac4a8a73b6f508"
    };

    var filePathToSend = path.join(__dirname, '../public', sampleFile.path);


    function uploadToS3(filepath, destFileName, callback) {
        photoBucket
            .upload({
                ACL: 'public-read',
                Body: fs.createReadStream(filepath),
                Key: destFileName.toString(),
                ContentType: 'application/octet-stream' // force download if it's accessed as a top location
            })
            // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html#httpUploadProgress-event
            .on('httpUploadProgress', function (evt) { console.log(evt); })
            // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html#send-property
            .send(callback);
    }

    multer({ limits: { fileSize: 10 * 1024 * 1024 } });

    console.log('filePathToSend is ');
    console.log(filePathToSend);

    uploadToS3(filePathToSend, sampleFile.filename, function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send('failed to upload to s3').end();
        }
        res.status(200)
            .send('File uploaded to S3: '
                + data.Location.replace(/</g, '&lt;')
                + '<br/><img src="' + data.Location.replace(/"/g, '&quot;') + '"/>')
            .end();
    });

    console.log('uploading now...');

};