'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// setup basic security with HelmetJs middleware
app.use((0, _helmet2.default)({
  frameguard: { action: 'deny' }
}));

// serve the correct static files
app.use(_express2.default.static(__dirname + '/lib'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/lib/index.html');
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Server for C9 Running in DEVELOPMENT MODE');
});
