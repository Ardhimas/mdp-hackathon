// app/provider.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our provider model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Provider', {
    name : {type : String, default: ''}
});