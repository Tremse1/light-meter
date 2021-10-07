input.onButtonPressed(Button.B, function () {
    let reading = 0
    basic.clearScreen()
    basic.showNumber(reading)
    basic.pause(500)
    basic.showString("M")
})
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})
