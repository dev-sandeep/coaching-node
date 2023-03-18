exports.getTempImageName = () => {
    return new Promise((resolve, reject) => {
        const testFolder = './images/';
        const fs = require('fs');

        fs.readdir(testFolder, (err, files) => {
            let fileName = '';
            files.forEach(file => {
                resolve(file);
            });
            reject("error");
        });
    })
}