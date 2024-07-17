class_name MainScene extends Node2D

@export_range(-1,1) var rect_relative_x_pos := -1.0
@export_range(-1,1) var rect_relative_y_pos := -1.0

func _ready():
	if Global.webkit:
		$WorldEnvironment.free()
		$Lighting/DirectionalLight2D.free()
		$Lighting/CanvasModulate.free()
		$CanvasLayer/CutsceneRect.material.shader = null
	
	$CanvasLayer.visible = true
	$CutsceneAnimator.play("intro_cutscene")
	self.visible = true

func _process(delta):
	$CanvasLayer/CutsceneRect.position.x = $CanvasLayer/CutsceneRect.size.x * rect_relative_x_pos
	$CanvasLayer/CutsceneRect.position.y = $CanvasLayer/CutsceneRect.size.y * rect_relative_y_pos
	$CanvasLayer/MarginContainer.position.x = $CanvasLayer/MarginContainer.size.x * rect_relative_x_pos
	$CanvasLayer/MarginContainer.position.y = $CanvasLayer/MarginContainer.size.y * rect_relative_y_pos

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
