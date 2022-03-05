const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
