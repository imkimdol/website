extends Camera2D

func _ready():
	Global.focus_camera.connect(on_focus_camera)
	Global.unfocus_camera.connect(on_unfocus_camera)
	var tween = get_tree().create_tween()
	tween.tween_property(self, "zoom", Vector2(1.75, 1.75), 2)

func on_focus_camera():
	var tween = get_tree().create_tween()
	tween.tween_property(self, "zoom", Vector2(2.5, 2.5), 0.5)

func on_unfocus_camera():
	var tween = get_tree().create_tween()
	tween.tween_property(self, "zoom", Vector2(1.75, 1.75), 0.5)
