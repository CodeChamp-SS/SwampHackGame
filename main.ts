controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jack.vy == 0) {
        jack.vy = -100
        jumpcount = 1
    } else if (jumpcount == 1) {
        jack.vy = -100
        jumpcount += 2
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, coll1) {
    coll1.destroy()
    statusbar.value += -30
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.setDialogTextColor(5)
    game.setDialogCursor(img`
        ..............................
        ..............................
        ..............................
        777777777777777777777777......
        7......................7......
        7.111.111.1111.111.111.7......
        7.1...1.1.1..1.1...1...7......
        7.111.111.1..1.1...111.7......
        7...1.1...1111.1...1...7......
        7.111.1...1..1.111.111.7......
        7......................7......
        777777777777777777777777......
        ..............................
        ..............................
        ..............................
        `)
    game.showLongText("Welcome To The world of retro.\\n Try to win as fast as possible.\\n press space to START GAME", DialogLayout.Center)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    game.over(true)
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
let statusbar: StatusBarSprite = null
let jack: Sprite = null
tiles.setTilemap(tilemap`level4`)
scene.setBackgroundColor(9)
let test1 = sprites.create(assets.image`image8`, SpriteKind.Food)
test1.setPosition(44, 16)
info.setScore(1000)
jack = sprites.create(assets.image`image6`, SpriteKind.Player)
controller.moveSprite(jack, 100, 0)
info.setLife(3)
jack.ay = 250
scene.cameraFollowSprite(jack)
statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.max = 100
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
game.onUpdate(function () {
	
})
game.onUpdateInterval(2000, function () {
    if (game.runtime() > 3000) {
        coll1 = sprites.createProjectileFromSide(assets.image`image8`, -39, 50)
        coll1.setPosition(jack.x + 50, jack.y - 50)
    }
})
game.onUpdateInterval(1000, function () {
    info.setScore(info.score() - 5)
    game.setDialogTextColor(0)
})
