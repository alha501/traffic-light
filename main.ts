radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        YELLOW()
        for (let index = 0; index < 3; index++) {
            basic.pause(1000)
        }
        RED()
    } else if (receivedNumber == 35) {
        basic.pause(2000)
        RED()
        basic.pause(2000)
        YELLOW()
        for (let index = 0; index < 3; index++) {
            basic.pause(1000)
        }
        GREEN()
        for (let index = 0; index < 2; index++) {
            basic.pause(5000)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    resume_traffic_light()
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
    basic.pause(2000)
    YELLOW()
    for (let index = 0; index < 3; index++) {
        basic.pause(1000)
    }
    GREEN()
    for (let index = 0; index < 3; index++) {
        basic.pause(5000)
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
input.onButtonPressed(Button.B, function () {
    resume_traffic_light()
    basic.showIcon(IconNames.StickFigure)
    music.playMelody("E D G F B A C5 B ", 196)
    for (let index = 0; index <= 15; index++) {
        basic.showNumber(15 - index)
        music.playMelody("C5 A E D C - - - ", 196)
    }
    music.playMelody("E D C C C C C C ", 196)
    basic.pause(500)
    resume_traffic_light()
    RED()
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
let counter = 0
let range: neopixel.Strip = null
let distance = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
RED()
basic.showIcon(IconNames.No)
radio.setGroup(32)
distance = 5
basic.forever(function () {
    sensor()
    if (distance < 5) {
        counter = 1
    }
    if (counter == 4) {
        resume_traffic_light()
    }
})
