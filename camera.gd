class_name CustomCamera extends Camera2D

var tween: Tween

func _ready():
	Global.camera = self

func on_focus_camera():
	zoom_to(Vector2(3, 3), 0.5)

func on_unfocus_camera():
	zoom_to(Vector2(2.25, 2.25), 1)

func zoom_to(amount: Vector2, duration: float):
	if tween:
		tween.kill()
	tween = get_tree().create_tween()
	tween.tween_property(self, "zoom", amount, duration)
