radio.onReceivedValue(function (name, value) {
    if (name == "10") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 208)
        }
    }
    if (name == "11") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        }
    }
    if (name == "12") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 43)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 43)
        }
    }
    if (name == "13") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 43)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 45)
        }
    }
    if (name == "14") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        }
    }
    if (name == "15") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        }
    }
    if (name == "16") {
        if (value == 1) {
            music.stopAllSounds()
        } else {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.X))
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(1, "Tümsek")
        huskylens.writeOSD("Tümsek", 150, 30)
        huskylens.clearOSD()
        radio.sendString("Tumsek")
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(2, "Cukur")
        huskylens.writeOSD("Cukur", 150, 30)
        huskylens.clearOSD()
        radio.sendString("Cukur")
    }
})
