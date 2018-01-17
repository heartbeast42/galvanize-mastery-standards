Stacks and queues are linear data structures that can be described like arrays.

On the OS level, in Chrome and in Node which uses the Chrome V8 JS engine, stacks and queues are used behind the scenes to track processes to execute and variables. We can write stacks and queues in JS using arrays.

The key difference between stacks and queues is the order in which information is removed. In either case we add information to the end of the array for example in JavaScript we can use `array.push(x)` to push the value of x to the end of the array. Essentially the difference between the 2 is that when we take away an item from the array we take from the front if it's a queue `queue.shift()` and from the back if it's a stack `stack.pop()`

There are 2 common acronyms used do describe the resulting patterns of thease 2 data structures

for stacks Last-In-First-Out or LIFO meaning that the last item added is the first item removed like a stack of plates.

for queues First-In-First-Out or FIFO meaning that the first item added is the first item removed like a queue of people in line for coffee or something.

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
