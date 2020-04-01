function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i===1){
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop (number){
while (number > 0){
  number -= 1
  console.log(number)
}
  return "done"
}
function doWhileLoop(num)­{
do(console.log("I run once regardless."))
while(incrementVariable()<num )}

in loops.js. The function should take an integer as an argument. Use the incrementVariable() function
(you can copy it from this README) in the condition, and console log "I run once regardless." while incrementVariable()
returns a number less than the parameter received. (Your condition might look something like incrementVariable() < num.)
Remember
that it should also console log when receiving 0 as a parameter because the do-while runs before the condition is checked.
