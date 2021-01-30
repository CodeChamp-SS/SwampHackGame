controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -120
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`anim`,
    100,
    false
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`image0`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 250
