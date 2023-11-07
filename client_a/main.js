require('dotenv').config();
const messageModule = require('./message.js');
const fs = require('fs');

const name = process.env.NAME;
const number = process.env.NUMBER;

const message = messageModule.create(name, number);

fs.writeFile('result.txt', message, 'utf8', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('結果が result.txt に書き込まれました。');
  }
});

