
exports.singleImageUpload = (req, res) => {
    const file = req.file;
    if (!file) {
      const error = new Error('Please upload an image file.');
      error.status = 400;
      return send(error);
    }
    res.send({ uploadedFile: file.filename });
  }