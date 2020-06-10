import MediaPlayer from "../MediaPlayer"

//#region Declaracion por prototipo
function Auto_Play() {
    Auto_Play.prototype.run = function (player) {
        player.play()
    }
}
//#endregion

//#region  Declaracion por clase
class AutoPlay {
    constructor() {

    }

    run(player: MediaPlayer) {
        // if (!player.muted) {
        //     player.muted=true
        // }

        if (!player.media.muted) {
            player.mute()
        }
        //player.play()
        player.togglePlay()
    }
}
//#endregion

export default AutoPlay