//Instalar Live-server
//npm i -D live-server

//Importar la clase MediaPlayer
import MediaPlayer from './MediaPlayer.js'

// const MediaPlayer = require('./MediaPlayer')

//Obtenemos los elementos del DOM
const video = document.querySelector('video')
const button = document.querySelector('button')


// const player = new Media_Player({ media: video });
const player = new MediaPlayer({ media: video });
//button.onclick = () => video.play()
button.onclick = () => player.togglePlay()



//video.play()
//No lo permite el navegador por UX, ya que necesita la interaccion, con el usuario.

