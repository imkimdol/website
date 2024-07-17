extends Node2D

func _ready() -> void:
	#JavaScriptBridge.eval("/^((?!chrome|android).)*safari/i.test(navigator.userAgent);")
	if JavaScriptBridge.eval("typeof window.webkitConvertPointFromNodeToPage === 'function'"):
		Global.webkit = true
		$CanvasLayer/WebkitWarning.visible = true
	else:
		Global.load_main_scene()


func _on_button_pressed() -> void:
	Global.load_main_scene()
