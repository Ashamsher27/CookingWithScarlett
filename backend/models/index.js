//index.js: Exports all models.

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  //useNewUrlParser: true, //deprecated 
  //useUnifiedTopology: true, //deprecated
  //useCreateIndex: true, // recommended to handle deprecation warning
});

mongoose.set('debug', true); // Enable debugging information
mongoose.Promise = global.Promise; // Set mongoose's Promise to use Node's Promise
module.exports.Recipe = require('./recipes')
module.exports.Ingredient = require('./ingredients')
