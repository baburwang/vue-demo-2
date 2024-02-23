const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.listen(80, () => {
  console.log(`Server is start, port is 80`);
});
