controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`anim`,
    100,
    false
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`image`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(7)
