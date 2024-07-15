extends Node

var camera_focused = false
var camera: CustomCamera

func _ready():
	DisplayServer.window_set_title("Harper Kim")

func focus_camera():
	camera_focused = true
	camera.on_focus_camera()

func unfocus_camera():
	camera_focused = false
	camera.on_unfocus_camera()
