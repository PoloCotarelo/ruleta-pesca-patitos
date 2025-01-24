let espera = 0
let fila = 0
let columna = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(11, 99))
})
function paso1 () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    basic.pause(espera)
}
function paso2 () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    basic.pause(espera)
}
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    espera = 50
    fila = 0
    columna = 0
    for (let index = 0; index < 25; index++) {
        led.toggle(fila, columna)
        for (let index = 0; index < 10; index++) {
        	
        }
        fila += 1
        if (fila == 5) {
            fila = 0
            columna += 1
        }
    }
})
