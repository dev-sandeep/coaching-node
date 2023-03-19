
exports.emptyImageTempFolder = (request, response, next)=>{
    const fsExtra = require('fs-extra');
    fsExtra.emptyDirSync('images');
    next();
}
