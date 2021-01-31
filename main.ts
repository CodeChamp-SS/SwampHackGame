controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jack.vy == 0) {
        jack.vy = -100
        jumpcount = 1
    } else if (jumpcount == 1) {
        jack.vy = -100
        jumpcount += 2
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    info.setScore(0)
    game.over(false, effects.confetti)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    coll1.destroy(effects.ashes, 100)
})
let coll1: Sprite = null
let jumpcount = 0
let jack: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level4`)
info.setScore(1000)
jack = sprites.create(assets.image`image6`, SpriteKind.Player)
controller.moveSprite(jack, 100, 0)
info.setLife(3)
jack.ay = 250
scene.cameraFollowSprite(jack)
let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.value = 10
statusbar.positionDirection(CollisionDirection.Left)
statusbar.setOffsetPadding(-40, 0)
let test = sprites.allOfKind(SpriteKind.Player)
info.setScore(1000)
game.onUpdate(function () {
    if (jack.vx > 0) {
        jack.setImage(assets.image`image6`)
    } else if (jack.vx < 0) {
        jack.setImage(assets.image`image7`)
    }
})
game.onUpdateInterval(2000, function () {
    if (game.runtime() > 3000) {
        coll1 = sprites.createProjectileFromSide(assets.image`image5`, -39, 50)
        coll1.setPosition(jack.x + 50, jack.y - 50)
    }
})
game.onUpdateInterval(1000, function () {
    info.setScore(info.score() - 5)
})
