const container = document.querySelector('.container')
const text = document.querySelector('#text')

// total time is 7.5 sec
const totalTime = 7500
// breathe time is 3 sec
const breatheTime = (totalTime / 5) * 2
// hold time is 1.5 sec
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Breath In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breath Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
    // breatheTime, setTimeout function will wait that amount time before it runs
}

setInterval(breatheAnimation, totalTime)