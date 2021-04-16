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
let véletlen = false
basic.showString("FEJ_IRAS")
basic.forever(function () {
	
})
