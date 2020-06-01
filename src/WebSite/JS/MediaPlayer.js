//#region Declaracion por prototipo
function Media_Player(config) {
    this.media = config.media
    this.pluggins = config.pluggins || [] //Valor inicial

    this._initPlugins()
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

Media_Player.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run()
    })
}

//#endregion

//#region Declaracion por clase
class MediaPlayer {
    constructor(config) {
        this.media = config.media
        this.plugins = config.plugins || [] //Valor inicial

        this._initPlugins()
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

    mute() {
        this.media.muted = true
    }

    unmute() {
        this.media.muted = false
    }

    toggleMute() {
        // debugger
        (this.media.muted)
            ? this.unmute()
            : this.mute()
    }

    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return media.muted
            },
            set muted(value){
                media.muted = value
            }
        }
        this.plugins.forEach(plugin => {
            //this es MediaPlayer
            plugin.run(this)
        })
    }
}
//#endregion

export default MediaPlayer

// module.exports = MediaPlayer