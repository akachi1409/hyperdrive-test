const Hyperdrive = require('hyperdrive');
const Corestore = require('corestore');

const fs = require('fs');
const corestore = new Corestore('storage');

const drive = new Hyperdrive(corestore);

// const readStream = fs.createReadStream('./hello.txt');
// const ws = drive.createWriteStream('./blob.txt');


// readStream.pipe(ws);
// ws.on('close', function () {
//   console.log("on close");
//   const rs = drive.createReadStream('/blob.txt');
//   rs.pipe(process.stdout);
// })