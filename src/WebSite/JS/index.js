//Instalar Live-server
//npm i -D live-server

//Importar la clase MediaPlayer
import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

// const MediaPlayer = require('./MediaPlayer')

//Obtenemos los elementos del DOM
const video = document.querySelector('video')
const playButton = document.querySelector('#playButton');
const muteButton = document.querySelector('#muteButton');


// const player = new Media_Player({ media: video });
const player = new MediaPlayer({
    media: video,
    plugins: [new AutoPlay()]
});
//playButton.onclick = () => video.play()
playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

//video.play()
//No lo permite el navegador por UX, ya que necesita la interaccion, con el usuario.

