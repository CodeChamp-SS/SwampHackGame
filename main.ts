controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jack.vy == 0) {
        jack.vy = -100
        jumpcount = 1
    } else if (jumpcount == 1) {
        jack.vy = -100
        jumpcount += 2
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        jack,
        [img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ............33322222..........
            ............33333333..........
            ..........2233333333..........
            ............ffffffff..........
            ............ddddddff..........
            ............dfdddddd..........
            ...........ddddddddd..........
            ............fffddddd..........
            ..............ddd.............
            ..............ddd.............
            ..dd.......555555555..........
            ..dd......d555555555dd........
            ..ddd....dd555555555ddd.......
            ...ddd.dddd555555555.ddd......
            ....dddddd.555555555..dd......
            .....ddd...555555555..ddd.....
            ...........555555555..ddd.....
            ...........555555555..ddd.....
            ...........666666666.ddd......
            ..........66666..66ddddd......
            .........66666...66ddd........
            ........66666....66dd.........
            .......66666......666...6fff..
            .......6666.......6666.66fff..
            ........6666.......666666fff..
            .........6666......666666fff..
            .........6666.......6666..ff..
            .........ffff.............ff..
            .......ffffff.................
            .......ffffff.................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ............33322222..........
            ............33333333..........
            ..........2233333333..........
            ............ffffffff..........
            ............ddddddff..........
            ............dfdddddd..........
            ...........ddddddddd..........
            ............fffddddd..........
            ..............ddd.............
            ..............ddd.............
            ...........5555555dddd........
            .......dd..55555dddddddd......
            .......ddd.555ddddd5.dddd.....
            .......ddd.55ddddd55..dddd....
            ........ddddddddd555...ddd....
            ........ddddddd55555....ddd...
            ...........ddd555555....dddd..
            ...........555555555...ddd....
            ...........666666666..ddd.....
            .......6666666666666..ddd.....
            .....666666666..6666...dd.....
            .....666666.....6666..........
            .....6666......666666.........
            ......6666.....666666.........
            ......66666.....66666.........
            .......6666fff..666666........
            ........666fff....66666.......
            .........66fff.....6666.......
            ..........6fff.....ffff.......
            ............ff...ffffff.......
            ............ff...ffffff.......
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `,img`
            ..............................
            ..............................
            ..............................
            .............33322222.........
            .............33333333.........
            ...........2233333333.........
            .............ffffffff.........
            .............ddddddff.........
            .............dfdddddd.........
            ............ddddddddd.........
            .............fffddddd.........
            ...............ddd............
            ...............ddd............
            ...dd.......555555555.........
            ...dd......d555555555dd.......
            ...ddd....dd555555555ddd......
            ....ddd.dddd555555555.ddd.....
            .....dddddd.555555555..dd.....
            ......ddd...555555555..ddd....
            ............555555555..ddd....
            ............555555555..ddd....
            ............666666666.ddd.....
            ...........66666..66ddddd.....
            ..........66666...66ddd.......
            .........66666....66dd........
            ........66666......666...6fff.
            ........6666.......6666.66fff.
            .........6666.......666666fff.
            ..........6666......666666fff.
            ..........6666.......6666..ff.
            ..........ffff.............ff.
            ........ffffff................
            ........ffffff................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `],
        100,
        false
        )
    }
    animation.runImageAnimation(
    jack,
    [img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ............33322222..........
        ............33333333..........
        ..........2233333333..........
        ............ffffffff..........
        ............ddddddff..........
        ............dfdddddd..........
        ...........ddddddddd..........
        ............fffddddd..........
        ..............ddd.............
        ..............ddd.............
        ..dd.......555555555..........
        ..dd......d555555555dd........
        ..ddd....dd555555555ddd.......
        ...ddd.dddd555555555.ddd......
        ....dddddd.555555555..dd......
        .....ddd...555555555..ddd.....
        ...........555555555..ddd.....
        ...........555555555..ddd.....
        ...........666666666.ddd......
        ..........66666..66ddddd......
        .........66666...66ddd........
        ........66666....66dd.........
        .......66666......666...6fff..
        .......6666.......6666.66fff..
        ........6666.......666666fff..
        .........6666......666666fff..
        .........6666.......6666..ff..
        .........ffff.............ff..
        .......ffffff.................
        .......ffffff.................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ............33322222..........
        ............33333333..........
        ..........2233333333..........
        ............ffffffff..........
        ............ddddddff..........
        ............dfdddddd..........
        ...........ddddddddd..........
        ............fffddddd..........
        ..............ddd.............
        ..............ddd.............
        ...........5555555dddd........
        .......dd..55555dddddddd......
        .......ddd.555ddddd5.dddd.....
        .......ddd.55ddddd55..dddd....
        ........ddddddddd555...ddd....
        ........ddddddd55555....ddd...
        ...........ddd555555....dddd..
        ...........555555555...ddd....
        ...........666666666..ddd.....
        .......6666666666666..ddd.....
        .....666666666..6666...dd.....
        .....666666.....6666..........
        .....6666......666666.........
        ......6666.....666666.........
        ......66666.....66666.........
        .......6666fff..666666........
        ........666fff....66666.......
        .........66fff.....6666.......
        ..........6fff.....ffff.......
        ............ff...ffffff.......
        ............ff...ffffff.......
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        .............33322222.........
        .............33333333.........
        ...........2233333333.........
        .............ffffffff.........
        .............ddddddff.........
        .............dfdddddd.........
        ............ddddddddd.........
        .............fffddddd.........
        ...............ddd............
        ...............ddd............
        ...dd.......555555555.........
        ...dd......d555555555dd.......
        ...ddd....dd555555555ddd......
        ....ddd.dddd555555555.ddd.....
        .....dddddd.555555555..dd.....
        ......ddd...555555555..ddd....
        ............555555555..ddd....
        ............555555555..ddd....
        ............666666666.ddd.....
        ...........66666..66ddddd.....
        ..........66666...66ddd.......
        .........66666....66dd........
        ........66666......666...6fff.
        ........6666.......6666.66fff.
        .........6666.......666666fff.
        ..........6666......666666fff.
        ..........6666.......6666..ff.
        ..........ffff.............ff.
        ........ffffff................
        ........ffffff................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `],
    100,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    jack,
    [img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..........22222333............
        ..........33333333............
        ..........3333333322..........
        ..........ffffffff............
        ..........ffdddddd............
        ..........ddddddfd............
        ..........ddddddddd...........
        ..........dddddfff............
        .............ddd..............
        .............ddd..............
        ..........555555555.......dd..
        ........dd555555555d......dd..
        .......ddd555555555dd....ddd..
        ......ddd.555555555dddd.ddd...
        ......dd..555555555.dddddd....
        .....ddd..555555555...ddd.....
        .....ddd..555555555...........
        .....ddd..555555555...........
        ......ddd.666666666...........
        ......ddddd66..66666..........
        ........ddd66...66666.........
        .........dd66....66666........
        ..fff6...666......66666.......
        ..fff66.6666.......6666.......
        ..fff666666.......6666........
        ..fff666666......6666.........
        ..ff..6666.......6666.........
        ..ff.............ffff.........
        .................ffffff.......
        .................ffffff.......
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..........22222333............
        ..........33333333............
        ..........3333333322..........
        ..........ffffffff............
        ..........ffdddddd............
        ..........ddddddfd............
        ..........ddddddddd...........
        ..........dddddfff............
        .............ddd..............
        .............ddd..............
        ........dddd5555555...........
        ......dddddddd55555..dd.......
        .....dddd.5ddddd555.ddd.......
        ....dddd..55ddddd55.ddd.......
        ....ddd...555ddddddddd........
        ...ddd....55555ddddddd........
        ..dddd....555555ddd...........
        ....ddd...555555555...........
        .....ddd..666666666...........
        .....ddd..6666666666666.......
        .....dd...6666..666666666.....
        ..........6666.....666666.....
        .........666666......6666.....
        .........666666.....6666......
        .........66666.....66666......
        ........666666..fff6666.......
        .......66666....fff666........
        .......6666.....fff66.........
        .......ffff.....fff6..........
        .......ffffff...ff............
        .......ffffff...ff............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `,img`
        ..............................
        ..............................
        ..............................
        .........22222333.............
        .........33333333.............
        .........3333333322...........
        .........ffffffff.............
        .........ffdddddd.............
        .........ddddddfd.............
        .........ddddddddd............
        .........dddddfff.............
        ............ddd...............
        ............ddd...............
        .........555555555.......dd...
        .......dd555555555d......dd...
        ......ddd555555555dd....ddd...
        .....ddd.555555555dddd.ddd....
        .....dd..555555555.dddddd.....
        ....ddd..555555555...ddd......
        ....ddd..555555555............
        ....ddd..555555555............
        .....ddd.666666666............
        .....ddddd66..66666...........
        .......ddd66...66666..........
        ........dd66....66666.........
        .fff6...666......66666........
        .fff66.6666.......6666........
        .fff666666.......6666.........
        .fff666666......6666..........
        .ff..6666.......6666..........
        .ff.............ffff..........
        ................ffffff........
        ................ffffff........
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `],
    100,
    false
    )
})
let jumpcount = 0
let jack: Sprite = null
jack = sprites.create(assets.image`image`, SpriteKind.Player)
controller.moveSprite(jack, 100, 0)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
jack.ay = 250
scene.cameraFollowSprite(jack)
