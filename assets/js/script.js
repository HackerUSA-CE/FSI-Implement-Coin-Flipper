// TODO: Declare any global variables we need
//declaring Header, Flip and Clear button variables
let headerBig = document.querySelctor("H1");
let coinImg = document.createElement("img");
let flipBut = document.createElement("button");
let clearBut = document.createElement("button");
let statusMes = document.createElement("h2");

//section to set attributes to the Image, Clearn and Flip button and the Status objects


//section to append the Image, buttons and status objects to teh header
headerBig.append("coinImg");
headerBig.append("flipBut");
headerBig.append("clearBut");
headerBig.append("statusMes");


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