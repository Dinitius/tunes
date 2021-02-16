export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio'),
    coverImg = document.querySelector('.radio-cover__img'),
    radioHeaderBig = document.querySelector('.radio-header__big'),
    radioNavigation = document.querySelector('.radio-navigation'),
    radioItem = document.querySelectorAll('.radio-item'),
    radioStop = document.querySelector('.radio-stop'),
    volume = document.querySelector('.radio-volume')

    const audio = new Audio()
    audio.type = 'audio/aac'

    radioStop.disabled = true

    const changePlayIcon = () => {
        if(audio.paused) {
            radio.classList.remove('play')
            radioStop.classList.remove('fa-stop')
            radioStop.classList.add('fa-play')
        } else {
            radio.classList.add('play')
            radioStop.classList.add('fa-stop')
            radioStop.classList.remove('fa-play')
        }
    }
    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'))
        elem.classList.add('select')
    }   

    radioNavigation.addEventListener('change', event => {
        const target = event.target
        const parent = target.closest('.radio-item')
        selectItem(parent)
        const title = parent.querySelector('.radio-name').textContent
        radioHeaderBig.textContent = title

        const urlImg = parent.querySelector('.radio-img').src
        coverImg.src = urlImg
        radioStop.disabled = false
        audio.src = target.dataset.radioStantion
        audio.play() 
        changePlayIcon()
    })

    radioStop.addEventListener('click', () => {
        if(audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
        changePlayIcon()
    })

    volume.addEventListener('input', () => {
        audio.volume = volume.value / 100
    })
}
