//#region Declaracion por prototipo
function Media_Player(config) {
    this.media = config.media
}

Media_Player.prototype.play = function () {
    this.media.play()
}

Media_Player.prototype.pause = function () {
    this.media.pause()
}

Media_Player.prototype.togglePlay = function () {
    //video.play();//Esto esta HardCodeado
    (this.media.paused)
        ? this.play()
        : this.pause()
}

//#endregion

//#region Declaracion por clase
class MediaPlayer {
    constructor(config) {
        this.media = config.media
    }

    //Metodos
    play() {
        this.media.play()
    }

    pause() {
        this.media.pause()
    }

    togglePlay() {
        (this.media.paused)
            ? this.play()
            : this.pause()
    }
}
//#endregion

export default MediaPlayer

// module.exports = MediaPlayer