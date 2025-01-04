extends Node

const main_scene: PackedScene = preload("res://main_scene.tscn")

var webkit := false
var apple := false
var camera_focused := false
var camera: CustomCamera

func _ready():
	DisplayServer.window_set_title("Harper Kim")

func load_main_scene():
	get_tree().change_scene_to_packed(main_scene)

func open_link(link: String):
	#if OS.has_feature('web'):
	#	JavaScriptBridge.eval("window.location.href='" + link + "'")
	OS.shell_open(link)

func focus_camera():
	camera_focused = true
	camera.on_focus_camera()

func unfocus_camera():
	camera_focused = false
	camera.on_unfocus_camera()
