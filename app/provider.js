// app/provider.js
// grab the mongoose module
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ProviderSchema = new schema({
    provider_id: String,
    name: String,
    wait_times: [Number],
    visit_times: [Number]
})
// define our provider model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Provider', ProviderSchema);