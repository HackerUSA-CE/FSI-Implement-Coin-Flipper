// TODO: Declare any global variables we need
//declaring Header, Flip and Clear button variables
let numHeads = 0;
let numTails = 0;
let flipBut = document.querySelector("#flip");
let claerBut = document.querySelector("#clear");


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    flipBut.addEventListener("click", (e) => {
        e.target.value = Math.floor(Math.random() * 2)
        //console.log(e.target.value)
        if (e.target.value == true) {
            numHeads += 1
            document.querySelector("img").src = "./assets/images/penny-heads.jpg"
            document.querySelector()
        } else {
            numTails += 1
            document.querySelector("img").src = "./assets/images/penny-tails.jpg"
        }
        //console.log(numHeads)
        //console.log(numTails)
    
    })


    // Flip Button Click Handler
        // DONE: Determine flip outcome
        // DONE: Update image and status message in the DOM

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