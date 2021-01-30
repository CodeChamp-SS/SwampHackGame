def on_up_pressed():
    global jumpcount
    if jack.vy == 0:
        jack.vy = -100
        jumpcount = 1
    elif jumpcount == 1:
        jack.vy = -100
        jumpcount += 2
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.brick, on_overlap_tile)

def on_on_overlap(sprite, otherSprite):
    coll1.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_life_zero():
    game.over(False, effects.confetti)
info.on_life_zero(on_life_zero)

def on_hit_wall(sprite, location):
    coll1.destroy(effects.ashes, 100)
scene.on_hit_wall(SpriteKind.projectile, on_hit_wall)

coll1: Sprite = None
jumpcount = 0
jack: Sprite = None
scene.set_background_color(9)
tiles.set_tilemap(tilemap("""
    level4
"""))
info.set_score(0)
jack = sprites.create(assets.image("""
    image6
"""), SpriteKind.player)
controller.move_sprite(jack, 100, 0)
info.set_life(3)
jack.ay = 250
scene.camera_follow_sprite(jack)
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

def on_update_interval():
    global coll1
    if game.runtime() > 3000:
        coll1 = sprites.create_projectile_from_side(assets.image("""
            image5
        """), -39, 50)
        coll1.set_position(jack.x + 50, jack.y - 50)
game.on_update_interval(2000, on_update_interval)

def on_update_interval2():
    info.set_score(info.score() - 5)
game.on_update_interval(1000, on_update_interval2)
