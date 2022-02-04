// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')
    let rollTimes = [0,0,0,0,0,0]
    let percent = [0,0,0,0,0,0]
    let current = 0

    const diceImg = document.querySelector('#dice-image')
    const rollBtn = document.querySelector('#roll')
    const clearBtn = document.querySelector('#clear')
    const messageText = document.querySelector('#message')
    const totalCount = document.querySelector('#tot-count')
    // TODO: Add event listener and handler for flip and clear buttons
    rollBtn.addEventListener('click', function() {
        current = Math.ceil(Math.random() * 6)
        rollTimes[current-1] ++

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        messageText.innerHTML = `You Rolled ${current}!`
        // TODO: Update image and status message in the DOM
        diceImg.src = `assets/images/dice/dice${current}.png`

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        let total = rollTimes[0] + rollTimes[1] + rollTimes[2] + rollTimes[3] + rollTimes[4] + rollTimes[5]
        document.querySelector(`#dice${current}`).innerHTML = rollTimes[current-1]

        for(let i=0; i < percent.length; i++) {
            document.querySelector(`#dice${i+1}-percent`).innerHTML = Math.round(rollTimes[i]/total * 100) + '%'
        }
        totalCount.innerHTML = `You Have Rolled ${total} Times yet`
        // Make variables to track the percentages of heads and tails
        
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
    clearBtn.addEventListener('click', function() {
        for(let i=0; i < percent.length; i++) {
            document.querySelector(`#dice${i+1}`).innerHTML = 0
            document.querySelector(`#dice${i+1}-percent`).innerHTML = 0 + '%'
            rollTimes[i] = 0
            
        }
        totalCount.innerHTML = `You Have Rolled 0 Times yet`
        messageText.innerHTML = "Let's Get Rolling!"
        diceImg.src = 'assets/images/dice/dice1.png'
        total = 0
    })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    })
}) // Renew
