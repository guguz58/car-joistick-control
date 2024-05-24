radio.onReceivedValue(function (name, value) {
    if (name == "10") {
        if (value == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
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
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        }
    }
    if (name == "15") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        }
    }
})
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
radio.setGroup(1)
basic.showIcon(IconNames.Angry)
basic.forever(function () {
	
})
