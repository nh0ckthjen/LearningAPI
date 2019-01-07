// Import express
let express = require('express');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./Routes");
// Use Api routes in the App
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Import Configuration
let config = require('./Configuration.json');


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/learningProject', { useNewUrlParser: true });
var db = mongoose.connection;

app.use('/', apiRoutes);

// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running project on port " + port);
});