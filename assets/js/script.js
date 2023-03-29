let headsFlips = 0
let tailsFlips = 0
let headsPercent = '0%'
let tailsPercent = '0%'
let totalFlips = 0


document.addEventListener('DOMContentLoaded', function () {

    // Flip Button Click Handler
    document.querySelector('#flip').addEventListener('click', function() {
        let coinFlip = Math.ceil((Math.random() * 2));
        if (coinFlip % 2 == 0) {
            // flip heads
            headsFlips++
            totalFlips++
            document.querySelector('#penny-image').src = './assets/images/penny-heads.jpg'
            document.querySelector('#message').textContent = 'You Flipped Heads!'
            document.querySelector('#heads').textContent = headsFlips
            if (tails == 0){
                return false
            } else {
                document.querySelector('#heads-percent').textContent = Math.round(headsFlips/totalFlips * 100) + '%'
                document.querySelector('#tails-percent').textContent = Math.round(tailsFlips/totalFlips * 100) + '%'
            }
            
        } else {
            // flip tails
            tailsFlips++
            totalFlips++
            document.querySelector('#penny-image').src = './assets/images/penny-tails.jpg'
            document.querySelector('#message').textContent = 'You Flipped Tails!'
            document.querySelector('#tails').textContent = tailsFlips
            if (heads == 0){
                return false
            } else {
                document.querySelector('#heads-percent').textContent = Math.round(headsFlips/totalFlips * 100) + '%'
                document.querySelector('#tails-percent').textContent = Math.round(tailsFlips/totalFlips * 100) + '%'
            }
        }
    })


    // Clear Button Click Handler
    document.querySelector('#clear').addEventListener('click', function() {
        headsFlips = 0
        tailsFlips = 0
        headsPercent = '0%'
        tailsPercent = '0%'
        totalFlips = 0
        document.querySelector('#penny-image').src = './assets/images/penny-heads.jpg'
        document.querySelector('#message').textContent = "Let's Get Flipping!"
        document.querySelector('#heads').textContent = headsFlips
        document.querySelector('#tails').textContent = tailsFlips
        document.querySelector('#heads-percent').textContent = headsPercent
        document.querySelector('#tails-percent').textContent = tailsPercent
    })


})