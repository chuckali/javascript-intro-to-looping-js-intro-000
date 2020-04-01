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
/*If your i value is 1, add the string "I am 1 strange loop."
If your i value is anything else, add the string "I am ${i} strange loops."
Remember flow control with if and else? And how do we interpolate i?

Once the loop has finished, return the array full of strings.
*/
