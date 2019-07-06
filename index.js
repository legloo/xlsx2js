//index.js

var XLSX = require('xlsx');

module.exports = function xlsx2js(file) {
    return new Promise(function (resolve, reject) {
        let fileReader = new FileReader();
        fileReader.onload = function (ev) {
            const data = ev.target.result;
            const workbook = XLSX.read(data, {
                type: "binary"
            });
            const wsname = workbook.SheetNames[0]; 
            const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); 
            resolve(ws);
        };
        fileReader.readAsBinaryString(file);
    })
}