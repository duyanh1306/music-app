const background = document.getElementById('background')
const thumbnail = document.getElementById('thumbnail')
const song = document.getElementById('song')
const songArtist = document.getElementsByClassName('song-artist')[0]
const songTitle = document.getElementsByClassName('song-title')[0]
const progressBar = document.getElementById('progress-bar')
const pPause = document.getElementById('play-pause')
let songs = ['./assets/Songs/Alone - Marshmello.mp3', './assets/Songs/Alone - Alan Walker_ Noonie Bao.mp3', './assets/Songs/AlonePtIi-AlanWalkerAvaMax-6363317.mp3']
let thumbnails = ['./assets/Cover/Marshmello.png ', './assets/Cover/walker-.png', './assets/Cover/walker-.png']
let artists = ['Marshmello', 'Alan Walker', 'Alan Walker']
let titles = ['Alone ', 'Alone', 'Alone II']
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
let songIndex = 0

function nextSong() {
    songIndex++
    if (songIndex >= songs.length)
        songIndex = 0
    song.src = songs[songIndex]
    thumbnail.src = thumbnails[songIndex]
    background.src = thumbnails[songIndex]
    songArtist.innerHTML = artists[songIndex]
    songTitle.innerHTML = titles[songIndex]
    playing = true
    playPause()
}

function previousSong() {
    songIndex--
    if (songIndex < 0)
        songIndex = songs.length - 1
    song.src = songs[songIndex]
    thumbnail.src = thumbnails[songIndex]
    background.src = thumbnails[songIndex]
    songArtist.innerHTML = artists[songIndex]
    songTitle.innerHTML = titles[songIndex]
    playing = true
    playPause()
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds - (min * 60))
    if (sec < 10) {
        sec = `0${sec}`
    }
    return `${min}:${sec}`
}

function updateProgressValue() {
    progressBar.max = song.duration
    progressBar.value = song.currentTime
    document.querySelector('.currentTime').innerHTML = formatTime(Math.floor(song.currentTime));
    if (document.querySelector('.durationTime').innerHTML === 'NaN:NaN') {
        document.querySelector('.durationTime').innerHTML = '0:00';
    } else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(song.duration));
    }
}
setInterval(updateProgressValue, 500)

function changeProgressBar() {
    song.currentTime = progressBar.value
}