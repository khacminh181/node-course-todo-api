var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

// if(process.env.MONGODB_URI) {
//     mongoose.connect(process.env.MONGODB_URI);
   
//    }else {
   
//     mongoose.connect(db, function(err){ //db = 'mongodb://localhost/yourdb'
//      if(err){
//       console.log(err);
//      }else {
//       console.log('mongoose connection is successful on: ' + db);
//      }
//     });
//    }
module.exports = {mongoose};