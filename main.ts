let dd2 = 0
let dd = 0
basic.clearScreen()
basic.showString("dodge-ball")
let location = 2
led.plot(2, 4)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && location > 0) {
        led.toggle(location, 4)
        location += -1
        led.plot(location, 4)
        basic.pause(100)
    } else if (input.buttonIsPressed(Button.B) && location < 4) {
        led.toggle(location, 4)
        location += 1
        led.plot(location, 4)
        basic.pause(100)
    }
})
basic.forever(function () {
    dd = randint(0, 4)
    for (let index1 = 0; index1 <= 3; index1++) {
        led.plot(dd, index1)
        basic.pause(1000)
        led.toggle(dd, index1)
    }
    if (dd == location) {
        while (true) {
            basic.showIcon(IconNames.No)
        }
    }
})
basic.forever(function () {
    if (dd == dd2) {
        dd2 = randint(0, 4)
    }
    for (let index2 = 0; index2 <= 3; index2++) {
        led.plot(dd2, index2)
        basic.pause(1000)
        led.toggle(dd2, index2)
    }
    if (dd2 == location) {
        while (true) {
            basic.showIcon(IconNames.No)
        }
    }
})
