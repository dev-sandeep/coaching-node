const env = require('dotenv');
const AWS = require('aws-sdk');
env.config();

/**
 * in bucket name - underscore not allowed 
 */
const BUCKET_NAME = 'almabetter-sample-bucket-0303';

/**
 * S3 access key params
 */
const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET
});

/**
 * params for the bucket
 */
const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "eu-west-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});
