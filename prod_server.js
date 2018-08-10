import express from 'express';

const app = express();

// serve the correct static files
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT, process.env.IP);
