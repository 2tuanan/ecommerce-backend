'use strict';

const mongoose = require('mongoose');
// const os = require('os');
// const process = require('process');
// const SECONDS = 5000

// Count connections
const countConnect = () => {
    const sumConnections = mongoose.connections.length;
    console.log(`Total connections: ${sumConnections}`);
}

//Check overload connections
// const checkOverload = () => {
//     setInterval( () => {
//         const numConnections = mongoose.connections.length
//         const numCores = os.cpus().length;
//         const memoryUsage = process.memoryUsage().rss;
//         const maxConnections = numCores * 5

//         console.log(`Active connections: ${numConnections}`);
//         console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

//         if (numConnections > maxConnections) {
//             console.log(`Connection overload detected!`)
//         }
//     }, SECONDS)
// }
module.exports = {
    countConnect,
    // checkOverload
}