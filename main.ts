input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        `)
    PA += 1
    Rounds += 1
    ShowScoreboard()
})
function ShowScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("PLayer A: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("PLayer B: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties : " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds : " + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    Ties += 1
    Rounds += 1
    OLED.writeStringNewLine("")
    ShowScoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # . # # .
        # . . . #
        # # # # #
        `)
    PB += 1
    Rounds += 1
    OLED.writeStringNewLine("")
    ShowScoreboard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Shall We Play A Game")
    basic.pause(2000)
    ShowScoreboard()
}
let Ties = 0
let PB = 0
let Rounds = 0
let PA = 0
reset()
