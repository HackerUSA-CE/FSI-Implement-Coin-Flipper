// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})

const resultText = document.querySelector('#message')
const coinImg = document.querySelector('#penny-image')
const headTimes = document.querySelector('#heads')
const headPercent = document.querySelector('#heads-percent')
const tailsTimes = document.querySelector('#tails')
const tailsPercent = document.querySelector('#tails-percent')
const flipBtn = document.querySelector('#flip')
const clearBtn = document.querySelector('#clear')
let head = 0
let tail = 0
let current = 0
let total = 0
flipBtn.addEventListener('click', function() {
    current = Math.random()
    if(current <= 0.5){
        head ++
        total ++
        headTimes.innerHTML = head
        headPercent.innerHTML = head/total
        tailsPercent.innerHTML = tail/total
    }
    else{
        tail ++
        total ++
        tailsTimes.innerHTML = tail
        headPercent.innerHTML = head/total
        tailsPercent.innerHTML = tail/total
    }
})

clearBtn.addEventListener('click', function() {
    head = 0
    tail = 0
    total = 0
    headTimes.innerHTML = head
    tailsTimes.innerHTML = tail
    headPercent.innerHTML = 0
    tailsPercent.innerHTML = 0
})