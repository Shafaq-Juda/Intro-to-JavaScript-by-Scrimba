// let count = 5
// count = count + 1
// console.log(count)



// Q1. Passsenger counter app 
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// Ans1.
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
  //  console.log(count)
  //  document.getElementById("count-el").innerText=count
  //or
  countEl.innerText = count
}


// Q2. Create a function, save(), which logs out the count when it's called

function save() {
    let savedEntries = count + "-"
    saveEl.innerText += savedEntries
    count = 0
    countEl.innerText = count
}

// we'll work on it later:
// function reset() {
//     count = 0
//     countEl = 0
//     saveEl.innerText += " "
// }
