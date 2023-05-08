let giro = 0
basic.forever(function () {
    giro = pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
    if (giro < 400) {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    } else if (giro > 700) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 250)
    }
})
