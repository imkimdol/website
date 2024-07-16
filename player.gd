class_name Player extends CharacterBody2D

const ACCELERATION = 100.0
const DECELLERATION = 50.0
const MAX_SPEED = 300.0

@export var controllable := false

var seconds_from_last_movement_input := 0.0
var direction_override := Vector2.ZERO
var wasd_is_showing := false

func _ready():
	$WASDLabel.modulate = Color(1,1,1,0)
	$ELabel.modulate = Color(1,1,1,0)

func _physics_process(delta):
	var direction = Vector2.ZERO
	
	if controllable:
		direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	else:
		direction = direction_override
	
	if direction:
		seconds_from_last_movement_input = 0
		velocity += direction * ACCELERATION
		
		if velocity.length_squared() > MAX_SPEED ** 2:
			velocity = velocity.limit_length(MAX_SPEED)
		
		hide_wasd()
	else:
		velocity.x = move_toward(velocity.x, 0, DECELLERATION)
		velocity.y = move_toward(velocity.y, 0, DECELLERATION)
		if controllable:
			seconds_from_last_movement_input += delta

	move_and_slide()
	if velocity.length_squared() > MAX_SPEED / 2:
		$AnimationPlayer.play("hop")
	
	if seconds_from_last_movement_input >= 3.0 and not wasd_is_showing and not Global.camera_focused:
		show_wasd()

func show_wasd():
	var tween = get_tree().create_tween()
	tween.tween_property($WASDLabel, "modulate", Color(1,1,1,1), 0.75)
	wasd_is_showing = true

func hide_wasd():
	var tween = get_tree().create_tween()
	tween.tween_property($WASDLabel, "modulate", Color(1,1,1,0), 0.3)
	wasd_is_showing = false

func show_e():
	var tween = get_tree().create_tween()
	tween.tween_property($ELabel, "modulate", Color(1,1,1,1), 0.15)

func hide_e():
	var tween = get_tree().create_tween()
	tween.tween_property($ELabel, "modulate", Color(1,1,1,0), 0.15)
