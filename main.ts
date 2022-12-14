radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        YELLOW()
        basic.pause(3000)
        RED()
    } else if (receivedNumber == 35) {
        basic.pause(3000)
        GREEN()
        for (let index = 0; index < 3; index++) {
            basic.pause(5000)
        }
    }
})
function Sonar () {
    for (let index = 0; index < 6; index++) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P1, 0)
        distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    }
    if (distance <= 5) {
        GREEN()
        counter += 1
    }
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
    }
    GREEN()
    basic.showIcon(IconNames.StickFigure)
    for (let index = 0; index <= 15; index++) {
        basic.showNumber(15 - index)
    }
    basic.showIcon(IconNames.No)
    YELLOW()
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
    }
    RED()
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
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
    }
    YELLOW()
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
    }
    GREEN()
    for (let index = 0; index < 3; index++) {
        basic.pause(5000)
    }
    RED()
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
    music.setTempo(304)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
    }
    GREEN()
    basic.showIcon(IconNames.StickFigure)
    music.playMelody("E D G F B A C5 B ", 196)
    for (let index = 0; index <= 15; index++) {
        basic.showNumber(15 - index)
        music.playMelody("C5 A E D C - - - ", 300)
        music.changeTempoBy(200)
    }
    music.playMelody("E D C C C C C C ", 300)
    basic.showIcon(IconNames.No)
    YELLOW()
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
    }
    RED()
})
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let distance = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
RED()
basic.showIcon(IconNames.Yes)
radio.setGroup(32)
distance = 7
let counter = 0
basic.forever(function () {
    Sonar()
})
