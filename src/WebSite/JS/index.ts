//Instalar Live-server
//npm i -D live-server

//Importar la clase MediaPlayer
import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

// const MediaPlayer = require('./MediaPlayer')

//Obtenemos los elementos del DOM
const video = document.querySelector('video')
const playButton: HTMLMediaElement = document.querySelector('#playButton');
const muteButton: HTMLElement = document.querySelector('#muteButton');


// const player = new Media_Player({ media: video });
const player = new MediaPlayer({
    media: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});
//playButton.onclick = () => video.play()
playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

//video.play()
//No lo permite el navegador por UX, ya que necesita la interaccion, con el usuario.

//Service workers

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js').catch(error => {
//         console.log(console.error.message)
//     })
// }

