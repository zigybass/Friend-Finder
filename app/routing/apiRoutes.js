const path = require("path");
const friends = require("../data/friends")

const apiFriends = function(app) {

    app.get("/api/friends", function (req, res) {
        console.log(res)
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        const newFriend = req.body;
        const totalDiff = [];
        friends.forEach( elem => {
            for (let i = 0; i < elem.scores.length; i++) {
                const diff = Math.abs(newFriend.scores[i] - elem.scores[i])
                totalDiff.push(diff);
            }
            
        })

        console.log(totalDiff)


        res.end()
    })
};

module.exports = apiFriends;
    