input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    enemy = game.createSprite(randint(0, 4), 0)
    enemy.change(LedSpriteProperty.Y, -1)
})
let enemy: game.LedSprite = null
let player_1 = game.createSprite(2, 4)
let score = 0
