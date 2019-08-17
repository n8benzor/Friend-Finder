

const friendsData = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


 // API GET Requests
 app.get("/api/friends", function (req, res) {
  res.json(friendsData);
});

// API POST Requests
app.post("/api/friends", (req, res) => {
  let userScore = req.body.scores;
  const scoresArr = [];
  let bestMatch = 0;


  for (let i = 0; i < friendsData.length; i++) {
      let scoreDiff = 0;
      for (let j = 0; j < userScore.length; j++) {
          scoreDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userScore[j])))
      }
      scoresArr.push(scoreDiff);
  }

  // loop through ours scoresArr
  for (let i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[bestMatch]) {
          bestMatch = i;
      }
  }

  // return the best match
  let topMatch = friendsData[bestMatch];
  res.json(topMatch);
  friendsData.push(req.body)

});


app.post("/api/clear", (req, res) => {
  // Empty out the arrays of data
  friendsData.length = [];
  res.json({
      ok: true
  });
});
};

