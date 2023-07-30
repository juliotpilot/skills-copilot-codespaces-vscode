// Create web server
var express = require('express');
var app = express();
// Create a router
var router = express.Router();
// Create a route for the default path
router.get('/', function(req, res) {
    res.send('Hello from router!');
});
// Register the router
app.use(router);
// Start listening on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});
```