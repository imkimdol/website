class_name MainScene extends Node2D

@export_range(-1,1) var rect_relative_pos := -1.0

func _ready():
	$CanvasLayer.visible = true

func _physics_process(delta):
	$CanvasLayer/CutsceneRect.size = get_viewport().size
	$CanvasLayer/CutsceneRect.position.x = get_viewport().size.x * rect_relative_pos

func _on_projects_cutscene_trigger_1_body_entered(body):
	$Player.controllable = false
	$Player.direction_override = Vector2.LEFT

func _on_projects_cutscene_trigger_2_body_entered(body):
	$CutsceneAnimator.play("projects_cutscene")
	await $CutsceneAnimator.animation_finished
	Global.open_link("https://kimdol.com/software")

func _on_music_cutscene_trigger_1_body_entered(body):
	$Player.controllable = false
	$Player.direction_override = Vector2.RIGHT

func _on_music_cutscene_trigger_2_body_entered(body):
	$CutsceneAnimator.play("music_cutscene")
	await $CutsceneAnimator.animation_finished
	Global.open_link("https://kimdol.com/music")


