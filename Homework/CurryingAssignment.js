// Create a function that everytime you invoke it,
// it will print out the message "Congrats you earn the chance!",
// however it can only print out the message with the first 5 excutions.
// all the rest invoke will print out the message "Sorry you missed the chance"
function lottery() {
    let count = 0
    lottery = function() {
        count++
        if (count <= 5) {
            console.log("Congrats you earn the chance!")
        } else {
            console.log("Sorry you missed the chance")
        }
    }
    lottery()
}

lottery()   //Congrats you earn the chance!
lottery()   //Congrats you earn the chance!
lottery()   //Congrats you earn the chance!
lottery()   //Congrats you earn the chance!
lottery()   //Congrats you earn the chance!
lottery()   //Sorry you missed the chance
lottery()   //Sorry you missed the chance