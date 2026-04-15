const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('public/MMP - Creavite Agency.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_text.txt', data.text);
    console.log("Extracted text, length:", data.text.length);
}).catch(console.error);
