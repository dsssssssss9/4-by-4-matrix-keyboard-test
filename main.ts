/**
 * 4 *4 Matrix keypad
 * 
 * **********************
 * 
 * Extension:
 * 
 * https://github.com/lioujj/pxt-keypad
 * 
 * Keys....
 * 
 * 1 2 3 A
 * 
 * 4 5 6 B
 * 
 * 7 8 9 C
 * 
 * * 0 # D
 */
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
keypad.setKeyPad4(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P8,
DigitalPin.P13,
DigitalPin.P14,
DigitalPin.P15,
DigitalPin.P16
)
basic.forever(function () {
    basic.showString(keypad.getKeyString())
    basic.pause(100)
})
