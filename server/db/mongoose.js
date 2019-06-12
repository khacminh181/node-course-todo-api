var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:minh1234@ds013486.mlab.com:13486/node-todos-app' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};