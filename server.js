const express = require('express');
const app = express();
const matakuliahRouter = require('./routers/matakuliah');

app.use('/matakuliah', matakuliahRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
