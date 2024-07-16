class_name Door extends StaticBody2D

@export var hyperlink := "https://harperkim.ca"
@export var player: Player
@export var cutscene_animation: AnimationPlayer
var player_entered := false

func _process(delta):
	if Input.is_action_just_pressed("ui_accept") and player_entered:
		on_door_interact()

func on_door_interact():
	player.controllable = false
	self.visible = false
	cutscene_animation.play("warp_cutscene")
	await cutscene_animation.animation_finished
	Global.open_link(hyperlink)

func _on_area_2d_body_entered(body):
	player_entered = true
	player.show_e()

func _on_area_2d_body_exited(body):
	player_entered = false
	player.hide_e()
