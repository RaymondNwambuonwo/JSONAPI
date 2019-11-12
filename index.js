const express = require("express");
const app = express();
const parser = require("body-parser")


app.use(parser.json());


app.listen(3000, () => console.log('listening on port 3000'));