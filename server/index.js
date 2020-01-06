const express = require('express');
const path = require('path');
const data = require('./data.json');

const app = express();

app.use(express.static(path.join(__dirname, '/../build')));
app.use('/images', express.static(path.join(__dirname, 'static/images')))

app.get('/api/me', (req, res) => {
  res.json(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'))
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
