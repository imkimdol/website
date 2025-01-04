class_name Sign extends StaticBody2D

@export var text := "Text goes here!"

var player_entered := false

func _ready():
	$InteractionLabel.modulate = Color(1,1,1,0)
	var label = $InteractionLabel/HBoxContainer/Container/MarginContainer/Label
	label.text = text

func _on_area_2d_body_entered(body):
	player_entered = true
	Global.focus_camera()
	
	var tween = get_tree().create_tween()
	tween.tween_property($InteractionLabel, "modulate", Color(1,1,1,1), 0.5)

func _on_area_2d_body_exited(body):
	player_entered = false
	Global.unfocus_camera()
	
	var tween = get_tree().create_tween()
	tween.tween_property($InteractionLabel, "modulate", Color(1,1,1,0), 0.5)
