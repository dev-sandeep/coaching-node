const multer = require('multer');
const path = require('path');

// configure the storage engine for Multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'images/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// create the Multer middleware with the storage engine and file filter
exports.uploader = multer({
  storage: storage,
  fileFilter: function(req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed.'));
    }
  },
});

exports.uploadMiddleware = (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload an image file.');
    error.status = 400;
    return send(error);
  }
  next();
  // res.send({ filename: file.filename });
}