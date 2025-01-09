class_name CustomCamera extends Camera2D

var tween: Tween

func _ready():
	Global.camera = self

func on_focus_camera():
	zoom_to(Vector2(3, 3), 0.5)

func on_unfocus_camera():
	zoom_to(Vector2(2.25, 2.25), 1)

func zoom_to(amount: Vector2, duration: float,
ease: Tween.EaseType = Tween.EASE_IN_OUT,
trans: Tween.TransitionType = Tween.TRANS_LINEAR):
	if tween:
		tween.kill()
	tween = get_tree().create_tween()
	tween.set_ease(ease)
	tween.set_trans(trans)
	tween.tween_property(self, "zoom", amount, duration)
