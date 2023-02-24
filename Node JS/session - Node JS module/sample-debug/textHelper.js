const fs = require('fs');
// const { exec } = require("child_process");

const readFile = () => {
    // exec("ls -la", (error, stdout, stderr) => {
    //     console.log(`stdout: ${stdout}`);
    // });
    let data = fs.readFileSync("./sample-debug/sentences.txt");
    let sentences = data.toString();
    return sentences;
};

const getWords = (text) => {
    let allSentences = text.split('\n');
    let flatSentence = allSentences.join(' ');
    let words = flatSentence.split(' ');
    words = words.map((word) => word.trim().toLowerCase());
    return words;
};

const countWords = (words) => {
    let map = {};
    words.forEach((word) => {
        if (word in map) {
            map[word] += 1;
            // map[word] = 1;
        } else {
            map[word] = 1;
        }
    });
    return map;
};

module.exports = { readFile, getWords, countWords };