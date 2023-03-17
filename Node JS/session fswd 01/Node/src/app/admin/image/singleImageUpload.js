exports.singleImageUploader = async (req, res) => {
    if (req.file) {
        res.send("Single file uploaded successfully");
    } else {
        res.status(404).send("Please upload a valid image");
    }
}