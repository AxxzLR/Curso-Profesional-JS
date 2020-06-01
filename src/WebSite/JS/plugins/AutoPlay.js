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

    run(player) {
        if (!player.muted) {
            player.mute()
        }
        player.play()
    }
}
//#endregion

export default AutoPlay