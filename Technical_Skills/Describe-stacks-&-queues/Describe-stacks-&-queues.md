Stacks and queues are linear data structures that can be described like arrays.

On the OS level, in Chrome and in Node which uses the Chrome V8 JS engine, stacks and queues are used behind the scenes to track variables and processes to execute. We can write stacks and queues in JS using arrays.

The key difference between stacks and queues is the order in which information is removed.
In either case we add information to the end of the array for example in JavaScript we can use `array.push(x)` to push the value of x to the end of the array. Essentially the difference between the 2 is that when we take away an item from the array we take from the front if it's a queue `queue.shift()` and from the back if it's a stack `stack.pop()`

### LIFO & FIFO
There are 2 common acronyms used do describe, resulting patterns of these 2 data structures
* for stacks Last-In-First-Out or LIFO meaning that the last item added is the first item removed like a stack of plates.
* for queues First-In-First-Out or FIFO meaning that the first item added is the first item removed like a queue of people in line for coffee or something.

An example of stacks and queues would be
### Stack
```
var x = 0           // initialize a variable called x and set it equal to 0
var stack = []      // initialize an empty array called stack
stack.push(5)       // stack === [5]
stack.push(9)       // stack === [5, 9]
x = stack.pop()     // stack === [5] && x === 9
```
### Queue
```
var x = 0           // initialize a variable called x and set it equal to 0
var queue = []      // initialize an empty array called queue
queue.push(5)       // queue === [5]
queue.push(9)       // queue === [5, 9]
x = queue.shift()   // queue === [9] && x === 5
```

### Uses in real life, when would you actually use these
I could imagine that you might use one over the other depending on the importance of the information coming in.
for example
* If all the data needs to be processed eventually use a queue. A queue will cycle through all the data in the array no matter how often new things are added.
* If the things that are added are added because they need to be dealt with right away and other things can wait because the new thing is the most important thing use a stack.
* another use for a stack specifically in programming is when we use recursion in a function we are taking advantage of the internal stack that the program is beholden to. An initial function is called which on execution calls itself a and must evaluate the new call and any subsequent calls before it can finish evaluating the initial call.  This is used in JS for Depth first searching algorithms.
* * Let's take that step by step
* * * a function is called and subsequently calls itself
* * * the initial function is added to a stack (like a plate being placed on a counter) this function is not done evaluating
* * * the subsequent function is executed and calls itself and is itself placed on the stack (like a plate being placed on top of the first plate)
* * * this continues until some "exit condition" is met and the function stops calling itself (no more plates being placed on the stack)
* * * all previous functions evaluate from the top plate to the bottom until the initial function returns.
(phew, that was dense)
* a queue can be used in breadth first searching algorithms although no recursion is needed
