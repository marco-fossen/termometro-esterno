let temperaturaEsterna = 0
radio.setGroup(1)
basic.forever(function () {
    temperaturaEsterna = input.temperature()
    basic.showString("" + (temperaturaEsterna))
    radio.sendNumber(temperaturaEsterna)
    basic.pause(1000)
})
