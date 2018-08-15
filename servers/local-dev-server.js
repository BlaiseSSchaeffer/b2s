const jsonToServe = 'sample.json';
const serverPort = 1995;

const jsonDir = __dirname + '/json';
const fs = require('fs');
const _ = require('lodash');
const http = require('http');

const headers = {
    "Content-Type": "application/json"
};

fs.readdir(jsonDir, (errors, files) => {
    if (!errors && files.length > 0) {
        const idx = _.indexOf(files, jsonToServe)
        if (idx >= 0) {
            const fileToServer = jsonDir + '/' + files[idx];
            console.log('Serving file ' + fileToServer);

            const content = fs.readFileSync(fileToServer);
            const json = JSON.parse(content);
            const jsonString = JSON.stringify(json);

            const server = http.createServer((request, response) => {
                console.log('Request received for ' + request.url);
                console.log();

                response.writeHead(200, null, headers);
                response.write(jsonString);
                response.end();
            });

            server.listen(serverPort);
            console.log('Dev server started on http://localhost:' + serverPort + '/');
            console.log();
        } else {
            console.log('Please set a file to serve via the jsonToServe property');
        }
    } else {
        console.log('Please add json data files for serving to ' + jsonDir);
    }
});