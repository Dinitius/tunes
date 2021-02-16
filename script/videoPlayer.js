export const videoPlayerInit = () => {
    const videoPlayer = document.querySelector('.video-player'),
    playBtn = document.querySelector('.video-button__play'),
    stopBtn = document.querySelector('.video-button__stop'),
    progress = document.querySelector('.video-progress'),
    videoPassed = document.querySelector('.video-time__passed'),
    videoTotal = document.querySelector('.video-time__total'),
    fullScreen = document.querySelector('.video-fullscreen'),
    volume = document.querySelector('.video-volume')


    const toggleIcon = () => {
        if (videoPlayer.paused) {
            playBtn.classList.remove('fa-pause')
            playBtn.classList.add('fa-play')
        } else {
            playBtn.classList.add('fa-pause')
            playBtn.classList.remove('fa-play')
        }
    }

    const togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play()
        } else {
            videoPlayer.pause()
        }

        toggleIcon()
    }

    const  stopPlay = () => {
        videoPlayer.pause()
        videoPlayer.currentTime = 0
    }

    const addZero = n => n < 10 ? '0' + n: n

    videoPlayer.addEventListener('click', togglePlay)
    playBtn.addEventListener('click', togglePlay)
    stopBtn.addEventListener('click', stopPlay)
    fullScreen.addEventListener('click', () => {
        videoPlayer.requestFullscreen()
    })
    volume.addEventListener('input', () => {
        videoPlayer.volume = volume.value / 100
    })
    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime
        const duration = videoPlayer.duration

        progress.value = (currentTime / duration) * 100

        let minutesPassed = Math.floor(currentTime / 60)
        let secondsPassed = Math.floor(currentTime % 60)

        let minutesTotal = Math.floor(duration / 60)
        let secondsTotal = Math.floor(duration % 60)

        videoPassed.textContent = addZero(minutesPassed) + ':' + addZero(secondsPassed)
        videoTotal.textContent = addZero(minutesTotal) + ':' + addZero(secondsTotal)
    })

    progress.addEventListener('change', () => {
        const duration = videoPlayer.duration
        const value = progress.value

        videoPlayer.currentTime = (value * duration) / 100
    })
}
