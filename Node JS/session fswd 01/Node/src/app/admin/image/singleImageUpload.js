const {uploadToS3} = require('./s3upload.js');
const {responseCreator} = require('./../../../utils/responseCreator');
exports.singleImageUpload = async (req, res) => {
    const file = req.file;
    if (!file) {
      const error = new Error('Please upload an image file.');
      error.status = 400;
      return send(error);
    }

    const fileName = 'foodadda-'+Date.now();
    const resp = await uploadToS3(fileName);

    res.send(responseCreator({ s3response: resp }));
  }