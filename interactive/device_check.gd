extends Node2D

func _ready() -> void:
	#JavaScriptBridge.eval("/^((?!chrome|android).)*safari/i.test(navigator.userAgent);")
	#if JavaScriptBridge.eval("typeof window.webkitConvertPointFromNodeToPage === 'function'"):
		#Global.webkit = true
		#$CanvasLayer/WebkitWarning.visible = true
	#else:
		#Global.load_main_scene()
	if JavaScriptBridge.eval("/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);"):
		Global.apple = true
		$CanvasLayer/Warning.visible = true
	else:
		Global.load_main_scene()

func _on_proceed_pressed() -> void:
	Global.load_main_scene()

func _on_go_back_pressed() -> void:
	Global.open_link("https://harperkim.ca")
