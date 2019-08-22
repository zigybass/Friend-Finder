const path = require("path");
const friends = require("../data/friends")

const apiFriends = function(app) {

    app.get("/api/friends", function (req, res) {
        console.log(res)
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        console.log("made it to routes")
        res.end()
    })
};

module.exports = apiFriends;
    