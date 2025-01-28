class_name Sign extends StaticBody2D

@export var text := "Text goes here!"
@export var desc := ""

var player_entered := false

func _ready():
	$InteractionLabel.modulate = Color(1,1,1,0)
	
	var label = %Text
	label.text = text
	
	var desc_label = %Desc
	if desc == "":
		desc_label.get_parent().queue_free()
	else:
		$InteractionLabel/FloatAnimation.stop()
		$InteractionLabel/FloatAnimation.play("float", -1, 0.5)
		desc_label.text = desc

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
