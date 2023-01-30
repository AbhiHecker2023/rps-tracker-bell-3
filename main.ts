function ShowScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("PLayer A: " + PA)
}
let PA = 0
OLED.init(128, 64)
PA = 0
let PB = 0
let Ties = 0
let Rounds = 0
OLED.writeStringNewLine("Shall We Play A Game")
