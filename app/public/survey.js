$("#submitResults").click(function (e) {
    e.preventDefault()
    console.log("click")
    const newPerson = {
        "name": $("#nameInput").val(),
        "photo": $("#photoInput").val(),
        "scores": [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val(),
        ]
    }
    console.log(newPerson)
    $.post("/api/friends", newPerson, function (res, req) {
        console.log("Person made, post made")
    })
})