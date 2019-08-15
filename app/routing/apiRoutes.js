
const path = require("path");
const friendsData = require("../data/friends");

module.exports = function (app) {
  // ===============================================================================
  // ROUTING
  // ===============================================================================
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function (req, res) {
    // const newprofile = req.body.scores;
    // begin by setting up the array hoding the user's answers
    let userResults = req.body.scores;
    const scoresArr = [];
    let match = 0;

    for (let i = 0; i < friendData.length; i++) {
      var scoreDiff = 0;
      for (let j = 0; j < userResults.length; j++) {
          scoreDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userResults[j])))
      }
      scoresArr.push(scoreDiff);
  }

  // loop through ours scoresArr
  for (let i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[match]) {
          match = i;
      }
  }

  // return the best match
  let soulMate = friendData[match];
  res.json(soulMate);
  friendData.push(req.body)
  console.log(req.body);

});


// app.post("/api/clear", (req, res) => {
//   // Empty out the arrays of data
//   friendData.length = [];
//   res.json({
//       ok: true
//   });
// });

}

