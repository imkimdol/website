class_name Sign extends StaticBody2D

@export var text := "Text goes here!"

var player_entered := false

func _ready():
	$InteractionLabel.modulate = Color(1,1,1,0)
	
	# https://forum.godotengine.org/t/changing-the-background-color-of-a-label/3006/2
	var new_sb = StyleBoxFlat.new()
	new_sb.bg_color = Color(0,0,0,0.5)
	
	var label = $InteractionLabel/HBoxContainer/Label
	label.text = text
	label.add_theme_stylebox_override("normal", new_sb)

func _process(delta):
	if Input.is_action_pressed("ui_accept") and player_entered:
		on_sign_interact()

func on_sign_interact():
	pass

func _on_area_2d_body_entered(body):
	player_entered = true
	Global.focus_camera.emit()
	
	var tween = get_tree().create_tween()
	tween.tween_property($InteractionLabel, "modulate", Color(1,1,1,1), 0.5)

func _on_area_2d_body_exited(body):
	player_entered = false
	Global.unfocus_camera.emit()
	
	var tween = get_tree().create_tween()
	tween.tween_property($InteractionLabel, "modulate", Color(1,1,1,0), 0.5)
