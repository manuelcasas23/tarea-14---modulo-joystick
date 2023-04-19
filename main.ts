basic.forever(function () {
    basic.clearScreen()
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    5
    ), pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    5
    ))
    if (!(input.pinIsPressed(TouchPin.P2))) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
})
