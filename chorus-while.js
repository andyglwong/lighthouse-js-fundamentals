// var chorus = "Let's dance!";
// var repeat = 0;
// while (repeat < 10) {
//   console.log(chorus);
//   repeat++;
// }
// console.log("Until the sun comes up!");

// We've been working with a pop idol on a new song, and to make sure it's a bonafide ear worm, the label wants us to repeat the chorus ten times at the end of the song. Wanting to practice some JavaScript, we decide to write a while loop to print out the chorus ten times.

// Create a new file in your lighthouse-js-fundamentals git repo on Vagrant called chorus-while.js with the following code.

// After running it with node chorus-while.js in your Terminal, you should see "Let's dance!" printed 10 times, followed by "Until the sun comes up!".

// How does this work? The while statement, similar to an if, takes a condition, and as long as this condition evaluates to true, the code inside the block will be executed again and again. To make sure we don't execute this code forever, we've declared a repeat variable that starts at 0 and increments by 1 (repeat++ is shorthand for repeat = repeat + 1) at every repetition of the block. Following is a representation of what our condition looks like at every step.

var chorus = "Let's dance!";
var repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

// When the value of repeat reaches 10, our while condition is no longer true and so JavaScript stops executing the contents of the block following the while statement and moves on.

// Like blocks following if statements, any code can go inside the block following a while. For example, if we're worried our song outro is too repetitive we might decide to change the key after five repetitions.

// Here, before printing the chorus for the sixth time (sixth because we've started counting at 0, not 1), we also instruct our pop star to change key before continuing. This works because the value of repeat will be equal to 5 only once – on the sixth iteration of our loop.