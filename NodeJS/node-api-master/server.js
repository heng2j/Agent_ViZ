// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// access file system
var fs = require('fs');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next){

// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', '*');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,    PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);

// Pass to next layer of middleware
next();
});


var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   

    console.log('thisLine: ', req.body);


	fs.appendFile('/Users/zhonghengli/Documents/NYU Grad/Ai Gaming Research/GitHub/CICERO-An-AI-Game-Design-Assisted-Tool/frames/mynewfile1.txt', req.body.row , function (err) {
	    if (err) throw err;
	    console.log('Saved!');
	});


});



// on routes that end in /bears
// ----------------------------------------------------
router.route('/constructLevelMap')

	// create a bear (accessed at POST http://localhost:8080/constructLevelMap)
	.post(function(req, res) {
		

		// var bear = new Bear();		// create a new instance of the Bear model
		thisLine = req.body.row;

		gameName = req.body.gameName;


		console.log('thisLine: ', thisLine);

 
		fs.appendFile('/Users/zhonghengli/Documents/NYU Grad/Ai Gaming Research/GitHub/CICERO-An-AI-Game-Design-Assisted-Tool/examples/gridphysics/' + gameName +'_lvl_fromAgentViz.txt', thisLine + "\n", 'utf8', function (err) {
		    if (err) throw err;
		    res.end('It worked!');
		    // console.log(res)

		});


		
	})


	router.route('/deleteGameLevelFile')

	// create a bear (accessed at POST http://localhost:8080/constructLevelMap)
	.post(function(req, res) {


		gameName = req.body.gameName;


		console.log('gameName: ', gameName);

		var fs = require('fs');
 
		fs.unlink('/Users/zhonghengli/Documents/NYU Grad/Ai Gaming Research/GitHub/CICERO-An-AI-Game-Design-Assisted-Tool/examples/gridphysics/' + gameName +'_lvl_fromAgentViz.txt', function(error) {
	    if (error) {
	        throw error;
	        res.end('The previous level file is deleted!');
	    }
	    console.log('Deleted ' + gameName +'_lvl_fromAgentViz.txt');
		});

		
	})

	// // get all the bears (accessed at GET http://localhost:8080/api/bears)
	// .get(function(req, res) {
	// 	Bear.find(function(err, bears) {
	// 		if (err)
	// 			res.send(err);

	// 		res.json(bears);
	// 	});
	// });




// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
