class_name Character extends CharacterBody2D

const ACCELERATION = 100.0
const DECELLERATION = 50.0
const MAX_SPEED = 300.0

func _physics_process(delta):
	var direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	
	if direction:
		velocity += direction * ACCELERATION
		
		if velocity.length_squared() > MAX_SPEED ** 2:
			velocity = velocity.limit_length(MAX_SPEED)
	else:
		velocity.x = move_toward(velocity.x, 0, DECELLERATION)
		velocity.y = move_toward(velocity.y, 0, DECELLERATION)

	move_and_slide()
	if velocity.length_squared() > MAX_SPEED / 4:
		$AnimationPlayer.play("hop")
