---
id: the-beauty-of-functional-programming
title: The beauty of functional programming
author: Fanny Vieira
author_url: https://github.com/fanny
author_image_url: https://i.imgur.com/QMznITd.jpg
tags: [functional, javascript, webdev, beginners]
---

There are many ways to make a program, probably you already made your program like a serie of commands, this is what we called of "imperative programming" or maybe you do your program keeping things in objects and interacting with them sending messages back and forward, this is "object oriented programming", but today i'll talk about Functional Programming, like the others mentionated, functional programming is a coding style, this is not about put or not `;` or put  `{}` after or below the expressions, but it's how we can instruct the program to make the things, in a technical way this is a "programming paradigm". So why you should care about this? <!--truncate-->

### Fun Fun Functions ✨

![](https://media.giphy.com/media/XOXdQszYm4I3m/giphy.gif)

When we talk about the world of functional programming, everything are functions. And the concept is too similar the math concept, when we study at school, the teacher says something like: 
> A function is a special relationship between values: Each of its input values gives back exactly one output value

*from [mathisfun](https://www.mathsisfun.com/sets/function.html)*

This definition is really important because give us the basis of our programs, called **pure functions**, pure functions are functions that only depends of its inputs, they don't look for anything else outside of your world, expect the arguments that you passed through, and only returns the output, they don't affect oher part of world. For example, see these functions, you can say what's wrong with the first?


First version ❌
```js

let age = 19

function getMyAge() {
  console.log(`I'm ${age} years old.`)
}

getMyAge(age)
age = 20
getMyAge(age)
```

Second Version ✅
```js
function getMyAge(age) {
  return `I'm ${age} years old.`
}

getMyAge(19)
getMyAge(20)
```

In the first case, the function is looking for a variable outside of your scope, changing the world of some way, in this case the output, the ideal is only return the value and if as you noticed, if we call the function, with same argument(even there's no argument), we get it a different value. In a pure function this is not happen.
Now, you have a basic idea of good things provided by functional programming, but we have more, check it out below our abilities 💪.

## Side Effects 🌊

A **side effect** is any interaction with our outside world that occurs during the calculations, that don't happen using pure functions, and our code, can be more predictale, because our results only depends its inputs, if we know what the function looks like, and which inputs it receives, you can predict the result..


## Mutability 🐺

Mutability is about things changeable, here in func. programming the mutability is discouranged. When we have immutable data, its state cannot change after you created, if you need change something, you need create a new value. 


Mutable example
```js
function changeFirstElem(array) {
  array[0] = 'Lose yourself to dance'
}

const daftPunkPopSongs = ['Instant Crush', 'Get Lucky', 'One More Time']
changeFirstElem(daftPunkPopSongs)
```

Immutable example
```js
function changeFirstElem(array) {
  const modifiedArray = ['Lose yourself to dance', ...array]
  return modifiedArray
}

const daftPunkPopSongs = ['Instant Crush', 'Get Lucky', 'One More Time']
const modifiedArray = changeFirstElem(daftPunkPopSongs)

```

This is awesome, because we make the things more safer, its harder do introduce bugs in our code, also means that is easier to test/debug our code. It's because the one thing that we need to know is about the output, follow the params, and if the output is wrong, we're sure that the problem is our function and not because a random interaction.


## Recursion 🥞

![](https://miro.medium.com/max/506/1*W1MmCSV4cJUnT7TuANWIOw.gif)

Recursion is a technique, in that we can solve a problem in small pieces, this help us to avoid some side effects when we use interactions.

```js
function myCount(int i) {
  if(i >= 10) return 0
  else return i + myCount(i+1)
}
myCount(1);
```
For me, the recursion makes a code more declarative, more readable and cleaner, although in many scenarios i prefer using iterative way.


## The super heroes of Functional Programming 🧚‍♀️

![](https://miro.medium.com/max/785/1*yD7P1I36G1jTProLQwEXxA.jpeg)

Beyond the recursion, we have tree functions that help us to manipulate the data they are **map-filter-reducer**. In JS, functions also treated as values, since that, we can pass it a parameter to other functions.

**Map**, given a collection of data, you can pass a function to transform each item.
```js
const numbers = [1, 2, 3];
const doubles = numbers.map(num => num * 2) //[2, 4, 6]
```
**Filter** receives a collection of data, and you can pass a conditional function that returns a subset of collection. 
```js
const numbers = [1, 2, 3];
const isGreaterThanOne = numbers.filter(num => num > 1) //[2, 3]
```
And finally, **Reduce**, given a collection of data you can reduce to a single value.
```js
const numbers = [1, 2, 3];
const mySum = numbers.reduce((accumulator, num) => accumulator + num) //6
```


## Conclusion 💃

I'm beginning on the study of functional programming, and these things motivates me to start and keep seeing many resources, obviously, functional programming has weakness, but now that's not the point. If you need other resources i'll left some below, enjoy and have-fun!

### Books
[Hackernoon - Understanding Functional Programming](https://hackernoon.com/understanding-functional-programming-with-javascript-41eb3fa8c2a)
[Professor Frisby's Mostly Adequate Guide to Functional Programming](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/)
[Functional JavaScript Mini Book by Jichao Ouyang](https://jcouyang.gitbooks.io/functional-javascript/content/en/index.html)
[Pragmatic Function Javascript online book](https://haskellcamargo.gitbooks.io/pragmatic-functional-javascript/)

### Talks

[Anjana Vankil - Functional Programming: What? Why? How?](https://www.youtube.com/watch?v=qtsbZarFzm8)*One of my favourites*
[Anjana Vankil - Immutable data structures for functional JS](https://www.youtube.com/watch?v=Wo0qiGPSV-s)
[Fun Fun Function Series](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
