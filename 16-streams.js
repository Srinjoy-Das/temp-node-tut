const { log } = require('console');
const {createReadStream} = require('fs');

const stream = new createReadStream('./content/big.txt', {highWaterMark: 90000});

stream.on('data', (result) => {
    console.log(result);
});
stream.on('error', (err) => {
    console.log(err);
});