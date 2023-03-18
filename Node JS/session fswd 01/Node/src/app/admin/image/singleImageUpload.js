const {uploadToS3} = require('./s3upload.js');
const {responseCreator} = require('./../../../utils/responseCreator');
const { Images } = require("../../../../model/Images");
exports.singleImageUpload = async (req, res) => {
    const { itid } = req.query;
    const file = req.file;
    if (!file) {
      const error = new Error('Please upload an image file.');
      error.status = 400;
      return res.status(error.status).send(responseCreator("Please upload an image file"));
    }

    const fileName = 'foodadda-'+Date.now();
    const resp = await uploadToS3(fileName);

    /* saving the images to the image table */
    await Images.create({
        url: resp.location,
        itid
    });

    res.send(responseCreator("Item image uploaded successfully", { s3response: resp, itid }));//resp.location
  }