"use strict";

var _compression = _interopRequireDefault(require("compression"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)(); // gzip all js and css files by default

app.use((0, _compression.default)()); // serve static assets folder

app.use(_express.default.static(__dirname + '/dist/assets')); // root route

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});
app.get('/*.js', function (req, res, next) {
  // serve .js.gz file instead of .js
  req.url = "".concat(req.url, ".gz");
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  res.set('Cache-Control', 'public, max-age=31536000');
  res.sendFile(__dirname + '/dist' + req.url);
}); // handle 404
// always reroute to react root

app.use(function (req, res) {
  res.status(400);
  res.sendFile(__dirname + '/dist/index.html');
}); // app.listen(process.env.PORT, process.env.IP);

app.listen(3000);
