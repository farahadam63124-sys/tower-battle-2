let angle = 0
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
    angle = -90
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
    angle += angle * -1
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(90)
        hourOfAi.turnBy(90)
        angle += angle * -1
    })
})
