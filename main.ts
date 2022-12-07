radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        YELLOW()
        basic.pause(200)
        RED()
    } else if (receivedNumber == 8) {
        basic.pause(200)
        GREEN()
    } else if (receivedNumber == 35) {
        resume_traffic_light()
    }
})
input.onButtonPressed(Button.A, function () {
	
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function resume_traffic_light () {
    RED()
    for (let index = 0; index < 2; index++) {
        basic.pause(2000)
    }
    YELLOW()
    for (let index = 0; index < 2; index++) {
        basic.pause(2000)
    }
    GREEN()
    for (let index = 0; index < 2; index++) {
        basic.pause(2000)
    }
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.AB, function () {
    RED()
    basic.pause(200)
    basic.showIcon(IconNames.StickFigure)
    music.playMelody("E D G F B A C5 B ", 196)
    for (let index = 0; index <= 15; index++) {
        basic.showNumber(15 - index)
    }
    basic.pause(500)
    resume_traffic_light()
    music.playMelody("A A G E E D C - ", 196)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.StickFigure)
    for (let index = 0; index <= 15; index++) {
        basic.showNumber(15 - index)
    }
    basic.pause(500)
    resume_traffic_light()
    basic.showIcon(IconNames.No)
})
function sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
}
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let count = 0
let distance = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
RED()
basic.showIcon(IconNames.Yes)
radio.setGroup(32)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (distance <= 5) {
            sensor()
            count = 1
        }
    }
    if (count == 4) {
        resume_traffic_light()
    }
})
