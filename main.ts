let marcha = 0
let giro = 0
basic.forever(function () {
    if (marcha < 400) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (marcha > 700) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    } else if (giro < 400) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    } else if (giro > 700) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else if (!(input.pinIsPressed(TouchPin.P0))) {
        music.playMelody("C5 - - - - - - - ", 1000)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    marcha = pins.analogReadPin(AnalogPin.P1)
})
basic.forever(function () {
    giro = pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
    basic.showIcon(IconNames.Butterfly)
})
