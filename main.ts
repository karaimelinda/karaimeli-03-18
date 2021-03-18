input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("Szia!")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(2021)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
