// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
app.get('/api/', function(req, res) {
  var date2 = new Date(); 
  var milliseconds =  Date.UTC(date2.getUTCFullYear(), 
                            date2.getUTCMonth(), 
                            date2.getUTCDate(),
                            date2.getUTCHours(), 
                            date2.getUTCMinutes(), 
                            date2.getUTCSeconds());
  var date = new Date(milliseconds);
  var utc = date.toUTCString();
  var result = {"unix": milliseconds, "utc": utc};    
  
  console.log(result);
  res.json(result)
  //var resDate = new Date();
  //res.json({ unix: resDate.valueOf(), utc: resDate.toUTCString() });
});

app.get('/api/:date?', function(req, res) {
  
  
  console.log({"milliseconds": milliseconds});
  if (isNaN(parseInt(req.params.date))){
      res.json({error : "Invalid Date"})
  }
  var milliseconds  = parseInt(req.params.date);
  var date = new Date(milliseconds);
  var utc = date.toUTCString();
  //"Fri, 25 Dec 2015 00:00:00 GMT"
  var result = {"unix": milliseconds, "utc": utc};    
  
  console.log(result);
  res.json(result)
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
