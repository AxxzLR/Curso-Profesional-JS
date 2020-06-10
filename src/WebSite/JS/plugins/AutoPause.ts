import MediaPlayer from "../MediaPlayer"

//#region  Declaracion por clase
class AutoPause {
    private threshold: number
    private visibleKey: string
    player: MediaPlayer
    constructor() {
        this.threshold = 0.50
        this.visibleKey = 'visible'
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibility = this.handleVisibility.bind(this)
    }

    run(player: MediaPlayer) {
        this.player = player
        //#region IntersectionObserver
        //Declaramos el intersection observer (handle, config)
        const observer = new IntersectionObserver(this.handleIntersection, { threshold: this.threshold })
        //Se define que el observer observara el reproductor.
        observer.observe(player.media)
        //#endregion

        //#region visibilitychange
        //El type de el eventlistener es visibilitychange
        document.addEventListener("visibilitychange", this.handleVisibility)
        //#endregion
    }

    handleIntersection(entries: IntersectionObserverEntry[]) {
        //entries es el arreglo de elementos observados
        const entry = entries[0]//Como solo existe uno se selecciona el primero
        let isVisible = entry.intersectionRatio >= this.threshold
        this.changePlay(isVisible)
    }

    handleVisibility() {
        const isVisible = document.visibilityState === this.visibleKey
        this.changePlay(isVisible)
    }

    changePlay(isVisible: boolean) {
        if (this.player.setPlaying) {
            if (isVisible) {
                this.player.play()
            }
            else {
                this.player.pause()
            }
        }
        // this.player.played = isVisible
    }
}
//#endregion

export default AutoPause