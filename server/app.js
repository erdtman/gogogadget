/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

const express = require('express');

const app = express();
app.use(express.static('view'));

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening at http://${host}:${port}`);
});


