def on_right_pressed():
    animation.run_image_animation(mySprite, assets.animation("""
        anim
    """), 100, False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    image
"""), SpriteKind.player)
controller.move_sprite(mySprite)
scene.set_background_color(7)