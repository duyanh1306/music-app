const background = document.getElementById('background')
const thumbnail = document.getElementById('thumbnail')
const song = document.getElementById('song')
const songArtist = document.getElementsByClassName('song-artist')[0]
const songTitle = document.getElementsByClassName('song-title')[0]
const progressBar = document.getElementById('progress-bar')
const pPause = document.getElementById('play-pause')
let songs = ['./assets/Songs/Alone - Marshmello.mp3', './assets/Songs/Alone - Alan Walker_ Noonie Bao.mp3']
let playing = true

function playPause() {
    if (playing) {
        pPause.src = './assets/Icons/icons8-pause-button-64.png'
        song.play()
        playing = false
    } else {
        pPause.src = './assets/Icons/icons8-circled-play-64.png'
        song.pause()
        playing = true
    }
}