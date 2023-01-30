function ShowScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("PLayer A: " + PA)
    OLED.writeStringNewLine("PLayer B: " + PB)
    OLED.writeStringNewLine("Ties : " + Ties)
    OLED.writeStringNewLine("Rounds : " + Rounds)
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
Ties = 0
Rounds = 0
OLED.writeStringNewLine("Shall We Play A Game")
