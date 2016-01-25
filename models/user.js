/**
 * Created by den on 24.01.16.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name :  {type: String, required: true},
    email :  {type: String, required: true},
    password :  {type: String, required: true}
});

mongoose.model('user', userSchema);