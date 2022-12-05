input.onButtonPressed(Button.A, function () {
	
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.Angry)
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Happy)
}
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.StickFigure)
    music.playMelody("E D G F B A C5 B ", 196)
    for (let index = 0; index <= 15; index++) {
        basic.showNumber(15 - index)
    }
    RED()
    music.playMelody("C C C C C C C C ", 196)
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
    basic.showIcon(IconNames.Asleep)
}
let count = 0
let distance = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (distance <= 5) {
            sensor()
            count = 1
        }
    }
    if (count == 4) {
        GREEN()
        basic.pause(2000)
        YELLOW()
        basic.pause(2000)
        RED()
        basic.pause(2000)
    }
})
basic.forever(function () {
    RED()
    for (let index = 0; index < 2; index++) {
        basic.pause(200)
    }
    YELLOW()
    for (let index = 0; index < 2; index++) {
        basic.pause(200)
    }
    GREEN()
    for (let index = 0; index < 2; index++) {
        basic.pause(200)
    }
})
