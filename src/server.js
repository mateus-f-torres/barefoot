import compression from 'compression';
import express from 'express';

const app = express();

// gzip all js and css files by default
app.use(compression());

// serve static assets folder
app.use(express.static(__dirname + '/dist/assets'));

// root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/bundle.*.js', (req, res, next) => {
  // serve .js.gz file instead of .js
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');

  res.sendFile(__dirname + '/dist' + req.url);
});

// handle 404
// always reroute to react root
app.use((req, res) => {
  res.status(400);
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT, process.env.IP);
