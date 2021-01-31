def on_up_pressed():
    global jumpcount
    if jack.vy == 0:
        jack.vy = -100
        jumpcount = 1
    elif jumpcount == 1:
        jack.vy = -100
        jumpcount += 2
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite, coll1):
    coll1.destroy()
    statusbar.value += -30
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_a_pressed():
    game.set_dialog_frame(img("""
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
    """))
    game.set_dialog_text_color(5)
    game.set_dialog_cursor(img("""
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
    """))
    game.show_long_text("Welcome To The world of retro.\\n Try to win as fast as possible.\\n press space to START GAME",
        DialogLayout.CENTER)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.brick, on_overlap_tile)

def on_life_zero():
    info.set_score(0)
    game.over(False, effects.confetti)
info.on_life_zero(on_life_zero)

def on_hit_wall(sprite, location):
    coll1.destroy(effects.ashes, 100)
scene.on_hit_wall(SpriteKind.projectile, on_hit_wall)

coll1: Sprite = None
jumpcount = 0
statusbar: StatusBarSprite = None
jack: Sprite = None
scene.set_background_color(9)
tiles.set_tilemap(tilemap("""
    level4
"""))
info.set_score(1000)
jack = sprites.create(assets.image("""
    image6
"""), SpriteKind.player)
controller.move_sprite(jack, 100, 0)
info.set_life(3)
jack.ay = 250
scene.camera_follow_sprite(jack)
statusbar = statusbars.create(20, 4, StatusBarKind.energy)
statusbar.max = 100
statusbar.position_direction(CollisionDirection.LEFT)
statusbar.set_offset_padding(-40, 0)
test = sprites.all_of_kind(SpriteKind.player)
info.set_score(1000)

def on_on_update():
    if jack.vx > 0:
        jack.set_image(assets.image("""
            image6
        """))
    elif jack.vx < 0:
        jack.set_image(assets.image("""
            image7
        """))
game.on_update(on_on_update)

def on_on_update2():
    pass
game.on_update(on_on_update2)

def on_update_interval():
    global coll1
    if game.runtime() > 3000:
        coll1 = sprites.create_projectile_from_side(assets.image("""
            image8
        """), -39, 50)
        coll1.set_position(jack.x + 50, jack.y - 50)
game.on_update_interval(2000, on_update_interval)

def on_update_interval2():
    info.set_score(info.score() - 5)
    game.set_dialog_text_color(0)
game.on_update_interval(1000, on_update_interval2)
