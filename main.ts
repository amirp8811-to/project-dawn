controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
