let B = 0
let A = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.pause(1000)
    for (let index = 0; index < B * 4; index++) {
        A = randint(1, 8)
        if (A == 1) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        }
        if (A == 2) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
        if (A == 3) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (A == 4) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
        if (A == 5) {
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                `)
        }
        if (A == 6) {
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                `)
        }
        if (A == 7) {
            basic.showLeds(`
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                `)
        }
        if (A == 8) {
            basic.showLeds(`
                . . . . #
                # . . # .
                # . # . .
                # # . . .
                # # # # .
                `)
        }
        basic.pause(900)
        basic.clearScreen()
        basic.pause(100)
    }
    B = 0
})
input.onButtonPressed(Button.B, function () {
    if (B > 8) {
        B = B - 8
    } else {
        B += 1
    }
    led.plotBarGraph(
    B,
    9
    )
})
