// First, create a new file in your lighthouse-js-fundamentals directory in Vagrant called ingredients.js, and copy the following code into it.

var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i = 7; i > -1; i--) {
  console.log(ingredients[i]);
}

// Write a loop under each comment in the file. Under the first, write a while loop that prints out each item of ingredients. Under the second, write a for loop that does the same thing. And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").

// Finally, commit your work to your lighthouse-js-fundamentals git repo and push it to GitHub.

// git add . , git commit -m "ingredients exercises" , git push origin master