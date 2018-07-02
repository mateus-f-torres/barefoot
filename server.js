import express from 'express';
import helmet from 'helmet';

const app = express();

// setup basic security with HelmetJs middleware
app.use(helmet({
  frameguard: { action: 'deny' }
}));

// serve the correct static files
app.use(express.static(__dirname + '/lib'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/lib/index.html');
});

app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Server for C9 Running in DEVELOPMENT MODE');
});
