# How to set up a GO environment for Node.js Devs

For this tutorial I will be showing you how to set up a Go environment.
I am assuming some familiarity with programing and specifically if you are
coming from a JavaScript / Node.js or Python context or another similar
interpreted language this tutorial is geared at you. This tutorial is by no means comprehensive and is intended to just get you off the ground and started in go, I hope it helps and inspires you to learn this wonderful language.  It should be noted that Go is a word with other meanings so when searching for Go related material us gophers use the term golang.  If you liked this or you hated it or you notice a problem with this tutorial and want to make me aware of it you can contact me on GitHub at this URL `https://github.com/ClarkWalker` I am also available for hire. :)

NOTE: As of now this is Mac specific.  I plan on updating this for Linux soon after my school schedule clears up.  I may even include windows support if I get really ambitious.

After this tutorial you should ...
* have a basic understanding of the GO compiler and how that differs from Node
* have GO installed
* have your GO development directories set up
* build and run a program that prints hello world

#### Let's get started talking about how GO runs.
With JavaScript the environment that your code runs in is essentially another program, like a browser or Node or some other program that can be scripted with JavaScript, Python is similar.  Go is a bit different though the "environment" that go runs in is the computers hardware itself.  JavaScript and Python are so called "interpreted languages" because some other program "interprets" your written code into machine commands every time the scripts are run. Compiled languages such as GO are "interpreted"(if you will) once into machine language and then saved in their compiled state to a different file that is run by the machine but is unreadable by humans.  Compiled languages are generally more efficient but take more time and skill to maintain and build codebases.

#### Installing and setting up GO
If you have homebrew installed you can run
```
$ brew install go --cross-compile-common
```
* I imagine that you could easily find similar packages for your distributions package manager.

Once GO finishes installing we can set up our paths; and here it is important to note that GO differs from JavaScript in that GO NEEDS a "workspace" whereas a JavaScript file can be plopped down in any ol' directory GO must have its own specific path.  This seems annoying at first but I and many other GO enthusiasts will tell you that it is actually pretty awesome once you get used to it.

To get started we will need to tell GO where we want to put our workspace.  So we will create a folder called go/ in our home directory.  This can be done with the following command.
```
$ mkdir $HOME/go
```

Next we need to tell our environment(ZSH in my case, maybe BASH or something else for you) to use that location for go files.  To do this we will edit our environments rc file, if you are using mac or linux out of the box odds are you are using bash so look for a file in your home directory called something like `.bash_profile` or `.bashrc` in my case it's called `.zshrc` you can open it with your editor of choice but I like nano for quick edits like this, so bearing in mind that this command may vary for you, it should look something like this.
`$ [name-of-text-editor] [.environment-run-configuration-file-name]` for me it is
```
$ nano $HOME/.zshrc
```
Once that is open add the following to the end of the file
```
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

Now your workspace will always be set and your computer can run GO code

* NOTE: Environment variables are important in GO in a way that they aren't in Node.js if you intend to get deeper into GO (which you should IMO :P) you will need to understand them and work with them, I bring this up because it was a stumbling block for me.

Now that you have set up a basic GO environment, let's set up the folder structure inside of the go folder we just created in the home directory make 3 folders called "bin" "pkg" and "src" bin is where all the compiled binary files will be automatically stored and organized, pkg is where dependancies will be automatically stored and organized and src is where we will be writing our actual code.  To make these folders enter the following...
```
$ cd ~/go
$ mkdir bin pkg src
```

Now just to be clear we could just start writing code in src but we shouldn't!  First if you don't have a GitHub account then what are you doing? Go make one.  Then make a directory in src called github.com exactly like that.  You can do it like this.
```
$ cd ~/go
$ mkdir ./src/github.com
```

then inside of that new directory create another directory (this is the last one I promise) with the name of your GitHub User-Name I'll show you mine although yours will obviously be different.
```
cd ~/go
$ mkdir ./src/github.com/ClarkWalker
```

#### Now that we're all set up let's write some GO code! :D
* NOTE: You can use whatever editor you like, I am using Atom which is my favorite graphical editors, If you use atom there are some awesome add-ons that make writing GO so so sweet and good.  They are, go-plus, go-debug, which I consider essential and optionally there is go-signature-statusbar, and if you use a linter linter-go.

For this exercise we will be building a hello world program in go that will show us a few things that are idiomatic in GO in other words it is deliberately more complicated than it needs to be but first lets just see the plain old simple hello world. In your terminal...
```
$ cd ~/go/src/github.com/[your-github-user-name]
$ take hello-world
$ touch app.go
```

Now I trust you to know how to open app.go in your editor of choice.  Once in app.go you can write in the following code.
```
package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
}

```
Now you can run it by typing this into your terminal.
```
$ go run app.go
Hello, World!
```
Lets look at that code a bit.  First we should understand that GO organizes its code into so called packages in order for anything to run though GO needs to execute the package called main so there can be other packages that are being imported into main but the MUST be a package main at the root of the project.  Speaking of importing packages this file is importing the "fmt" package "fmt" stands for format and is a common package in GO and is part of the GO standard library. next like a package main we absolutely NEED a func main or our code will not run at all! func main is where all the other parts of the program are coordinated at.  Then we can see we are calling an exported function on fmt called fmt.Println and passing it a string value of "Hello, World!" this serves the same function as console.log('Hello, World!') in JavaScript.

Let's break this out a little further and make another file `touch consolelog.go` and in there let's set the content as follows.
```
package main

import "fmt"

// ConsoleLog ...
func ConsoleLog(phrase string) {
	fmt.Println(phrase)
}
```
*   NOTE: when you start the name of a function with a capital letter in GO that function is exported and made available outside of it's own package although we are still in package main for both files so in this case you can uncapitalize ConsoleLog in both files and it should work fine also notice that we are declaring string after the perimeter called phrase when a variable or param is declared it must be explicitly or implicitly fixed to a datatype GO is a strongly typed language which means that the data itself can change for a variable but the datatype can not change from what it initially was...
And now let's make app.go look like this.

```
package main

func main() {
	sayHi := "Hello, World!"
	ConsoleLog(sayHi)
}
```
Now lets run that with the same command as before `$ go run app.go` this time we got an error saying that ConsoleLog is not defined this is because according to the command we just entered go is not aware of any other files other than app.go. So we need to make GO aware of all the files in the directory by typing `$ go run *`

Welcome to GOLANG!  This tutorial
