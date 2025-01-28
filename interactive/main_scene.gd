class_name MainScene extends Node2D

@export_range(-1,1) var rect_relative_x_pos := -1.0
@export_range(-1,1) var rect_relative_y_pos := -1.0

var returning = false

func _ready():
	if Global.apple:
		$WorldEnvironment.free()
		#$Lighting.free()
		$CanvasLayer/CutsceneRect.material.shader = null
	
	$CanvasLayer.visible = true
	$CutsceneAnimator.play("intro_cutscene")

func _process(delta):
	$CanvasLayer/CutsceneRect.position.x = $CanvasLayer/CutsceneRect.size.x * rect_relative_x_pos
	$CanvasLayer/CutsceneRect.position.y = $CanvasLayer/CutsceneRect.size.y * rect_relative_y_pos
	$CanvasLayer/MarginContainer.position.x = $CanvasLayer/MarginContainer.size.x * rect_relative_x_pos
	$CanvasLayer/MarginContainer.position.y = $CanvasLayer/MarginContainer.size.y * rect_relative_y_pos


func _on_music_cutscene_trigger_1_body_entered(body):
	if not returning:
		$Player.controllable = false
		$Player.direction_override = Vector2.RIGHT
	else:
		await get_tree().create_timer(0.5).timeout
		returning = false
		$Player.controllable = true

func _on_music_cutscene_trigger_2_body_entered(body):
	$Player.direction_override = Vector2.ZERO
	$CutsceneAnimator.play("music_cutscene")
	await $CutsceneAnimator.animation_finished
	Global.open_link("https://kimdol.com")
	
	await get_tree().create_timer(0.5).timeout
	
	$CutsceneAnimator.play_backwards("music_cutscene")
	await $CutsceneAnimator.animation_finished
	returning = true
	$Player.direction_override = Vector2.LEFT
