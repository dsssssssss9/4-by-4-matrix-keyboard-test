basic.show_icon(IconNames.HEART)
basic.pause(1000)
basic.clear_screen()
keypad.set_key_pad4(DigitalPin.P0,
    DigitalPin.P1,
    DigitalPin.P2,
    DigitalPin.P8,
    DigitalPin.P13,
    DigitalPin.P14,
    DigitalPin.P15,
    DigitalPin.P16)

def on_forever():
    basic.show_string(keypad.get_key_string())
    basic.pause(100)
basic.forever(on_forever)
