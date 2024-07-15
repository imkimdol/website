class_name Informant extends StaticBody2D

var player_entered := false

func _process(delta):
	if Input.is_action_pressed("ui_accept") and player_entered:
		on_sign_interact()

func on_sign_interact():
	pass

func _on_area_2d_body_entered(body):
	player_entered = true
	Global.focus_camera.emit()
	$Sprite2D.modulate = Color(0.5, 0.5, 1)
	
	var tween = get_tree().create_tween()
	tween.tween_property($InteractionLabel, "modulate", Color(1,1,1,1), 0.5)

func _on_area_2d_body_exited(body):
	player_entered = false
	Global.unfocus_camera.emit()
	$Sprite2D.modulate = Color(1, 1, 1)
	
	var tween = get_tree().create_tween()
	tween.tween_property($InteractionLabel, "modulate", Color(1,1,1,0), 0.5)
