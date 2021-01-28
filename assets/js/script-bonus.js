// Track any global variables we need
// All rolls array traks a count for each position. 
// allRolls = [ones, twos, threes, fours, fives, sixes]
let allRolls = [0, 0, 0, 0, 0, 0]

// Define a function that updates the scoreboard so that both buttons can reuse it
let updateScoreboard = function () {
    // Calculate total number of rolls
    let total = allRolls[0] + allRolls[1] + allRolls[2] + allRolls[3] + allRolls[4] + allRolls[5]

    // Create a variable to track percentages
    let allPercents = [0, 0, 0, 0, 0, 0]

    // Before trying to divide, make sure total is not zero
    if (total > 0) {
        // Calculate percentages and update scoreboard for each roll
        for (let i = 0; i < allRolls.length; i++) {
            // Get the percentage for this roll
            allPercents[i] = Math.round((allRolls[i] / total) * 100)
        }
    }

    // Update the values in the scoreboard table for each value
    for (let i = 0; i < allRolls.length; i++) {
        document.getElementById(`td${i + 1}`).textContent = allRolls[i]
        document.getElementById(`td${i + 1}-percent`).textContent = allPercents[i] + '%'
    }
}

// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners and handlers for both buttons
    document.getElementById('roll').addEventListener('click', function () {
        // Determine dice roll using Math.random()
        let rolledValue = Math.ceil(Math.random() * 6)

        // Display the result of the roll
        document.getElementById('message').textContent = `You Rolled ${rolledValue}!`

        // Add one to the count of number of rolls for the number
        // Remember arrays are indexed from zero, so it is one less than the rolled value
        allRolls[rolledValue - 1] += 1

        // Show different images for each dice roll
        document.getElementById('dice-image').src = `assets/images/dice/dice${rolledValue}.png`

        // Update the scoreboard
        updateScoreboard()
    })

    document.getElementById('clear').addEventListener('click', function () {
        // Reset the rolls values to zeroes
        allRolls = [0, 0, 0, 0, 0, 0]

        // Update the message to the user
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'

        // Update the scoreboard
        updateScoreboard()
    })
})

