const path = require("path");
const friends = require("../data/friends")

const apiFriends = function(app) {

    app.get("/api/friends", function (req, res) {
        // console.log(res)
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body)
        const newFriend = req.body;
        const possMatch = [];

        friends.forEach( elem => {
            const totalDiff = [];
            // console.log(totalDiff)
            for (let i = 0; i < elem.scores.length; i++) {
                const diff = Math.abs(newFriend.scores[i] - elem.scores[i])
                totalDiff.push(diff);

            }
            const poss = totalDiff.reduce( function (agg, num) {
                return agg + num;
            })
            possMatch.push(poss);
            console.log("totalDiff " + totalDiff)
        })

        const bestMatch = Math.min(...possMatch);
        // console.log("pos match " + possMatch)
        const perfectMatch = possMatch.indexOf(bestMatch)
        // console.log("best: " + bestMatch)
        // console.log("Best Friend: " + friends[perfectMatch])
        const match = friends[perfectMatch]
        friends.push(newFriend);
        console.log(friends)
        res.json(match)
    })
};

module.exports = apiFriends;
    