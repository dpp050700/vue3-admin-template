import express from 'express';
import fs from 'fs-extra'
import {viewsDir} from './constants/index.js'

var app = express();

app.get('/', function(req, res) {
  fs.ensureDirSync(viewsDir)
  res.send(viewsDir);
});

app.listen(8888, () => {
  console.log(`Example app listening on port 8888`)
})