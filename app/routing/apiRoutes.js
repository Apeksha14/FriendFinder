var allUsers 		= require('../data/friends.js');
var path 			= require('path');

// API GET Requests - when users visits a page. 

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(allUsers);
	
});



//API POST Request-handles when user submits a form & thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate Javascript array

	app.post('/api/friends', function(req, res){

		var bestMatch = {
			name: "",
			photo: "",
			matchDifference: 1000
		};
		var userData 	= req.body;
		var userName 	= userData.name;
		var userImage 	= userData.photo;
		var userScores 	= userData.scores;
		var sumOfDiff = 0;

		//loop through the friends data array of objects to get each friends scores
		for(var i = 0; i < allUsers.length-1; i++){

			//loop through that friends score and the users score and calculate the 
			// absolute difference between the two and push that to the total difference variable set above
			sumOfDiff = 0;
			for(var j = 0; j < 10; j++){

				// We calculate the difference between the scores and sum them into the totalDifference
				sumOfDiff += Math.abs(parseInt(userScores[j]) - parseInt(allUsers[i].scores[j]));
				// If the sum of differences is less then the differences of the current "best match"
				console.log(sumOfDiff);

				if(parseInt(sumOfDiff) <= parseInt(bestMatch.matchDifference)){

					// Reset the bestMatch to be the new friend. 
					bestMatch.name = allUsers[i].name;
					bestMatch.photo = allUsers[i].photo;
					bestMatch.matchDifference = sumOfDiff;
					console.log(bestMatch);
				}
			}
							

			
		}

		allUsers.push(userData);
 
		res.json(bestMatch);
	});
};

