let fila = 0
let columna = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(101, 999))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    fila = 0
    columna = 0
    for (let index = 0; index < 25; index++) {
        kitronik_motor_driver.stepperMotorTurnAngle(kitronik_motor_driver.MotorDirection.Forward, 360)
        led.toggle(fila, columna)
        basic.pause(1000)
        fila += 1
        if (fila == 5) {
            fila = 0
            columna += 1
        }
    }
})
