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
    media: HTMLMediaElement
    plugins: Array<any>
    setPlaying: boolean
    container: HTMLElement
    constructor(config: any) {
        this.media = config.media
        this.plugins = config.plugins || [] //Valor inicial
        this.initPlayer()
        this.initPlugins()
    }

    //#region Metodos
    initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }
    play() {
        this.media.play()
    }

    pause() {
        this.media.pause()
    }

    togglePlay() {
        (this.media.paused)
            ? this.play()
            : this.pause();
        this.setPlaying = !this.media.paused
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

    //#endregion

    //Inicializar
    private initPlugins() {
        const player = {
            // play: () => this.play(),
            // pause: () => this.pause(),
            media: this.media,
            get played() {
                return !this.media.paused
            },
            set played(value) {
                (value)
                    ? this.play()
                    : this.pause()
            },
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value
            }
        }
        this.plugins.forEach(plugin => {
            //this es MediaPlayer
            plugin.run(this)
            // plugin.run(player)
        })
    }
}
//#endregion

export default MediaPlayer

// module.exports = MediaPlayer