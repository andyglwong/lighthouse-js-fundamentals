// You may have wondered why in all examples so far we started our repeat counter at 0 and not at 1. Our code could have worked if we started the counter at 1, or at any other number, as long as our condition made sure we incremented the counter ten times. But the reason we made the choice to start at 0 is because, as you might remember, array indexing in programming languages usually starts at 0 and a very frequent use of loops is to work with the contents of an array, one at at time.

// We're moving, and we've made a list of all the kitchen items we want to take along. Let's create another file called packing-list.js in Vagrant with the following code.

var packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (var i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

// Running this with node packing-list.js in the Terminal, we see that the program reminds us to pack all the items in our kitchen. Looking more deeply into the code, this works because we're declaring a counter variables called i (short for "index") that starts at 0, and increments by 1 at every step of a loop until it matches the length of our array, that is packingList. You might remember that to access an item in an array we index it.
// Only we want to index every item, and so we've built a loop that increments an index variable i, which we can use to look into packingList one item at a time.