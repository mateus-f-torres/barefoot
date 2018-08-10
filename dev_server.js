import express from 'express';

const app = express();

// serve the correct static files
app.use(express.static(__dirname + '/lib'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/lib/index.html');
});

let listener = app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Server for C9 Running in DEVELOPMENT MODE ');
});

