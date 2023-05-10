basic.forever(function () {
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    5
    ), pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    5,
    0
    ))
    servos.P0.setAngle(pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    180
    ))
    if (!(input.pinIsPressed(TouchPin.P1))) {
        music.playTone(659, music.beat(BeatFraction.Quarter))
    }
})
