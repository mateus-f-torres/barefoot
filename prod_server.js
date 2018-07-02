'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Server for C9 Running in PRODUCTION MODE');
});
