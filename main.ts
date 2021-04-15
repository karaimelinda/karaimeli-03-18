input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("Szia!")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(500)
    véletlen = Math.randomBoolean()
    if (véletlen == true) {
        basic.showIcon(IconNames.Ghost)
    } else {
        basic.showNumber(5)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(randint(5, 15))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(2021)
})
let véletlen = false
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
