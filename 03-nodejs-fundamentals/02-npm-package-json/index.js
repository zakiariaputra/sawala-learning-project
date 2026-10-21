// const _ = require('lodash');
// const angka = [1, 2, 3, 4, 5];

// console.log("server bejalan!");

// console.log(_.reverse(angka));

// console.log("Halo dari Nodemon!");

// console.log("Node version:", process.version)
// console.log("Platform:", process.platform)
// console.log("Current folder:", process.cwd())
// console.log("Username:", process.env.USERNAME)

// require("dotenv").config();

// console.log("name:", process.env.APP_NAME)
// console.log("port:", process.env.PORT)
// console.log("mode:", process.env.MODE)

// console.log("Halo, "+ process.argv[2]+"!")

const fs = require('fs');

console.log(fs.readFileSync('./data.txt', 'utf-8'))