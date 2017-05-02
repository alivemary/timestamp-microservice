// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/timestamp/:date_string", function (req, res) {
  
  var new_date = req.params.date_string;
  var result = {"error" : "Invalid Date" };
  if (!isNaN(new_date)) {
      new_date *= 1000;
      }
  var data = new Date (new_date);
  if (!isNaN(Date.parse(data))) {
      result  = {
        unix: data.getTime(),
        time: data.toUTCString()
      };
      }
   
  res.json(result);
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});